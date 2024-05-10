import { useEffect, useState } from "react";

import { db, auth, storage } from "../../config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import "./CreatePost.css";

function CreatePost() {
  const [userList, setUserList] = useState([]);

  // New Movie States
  const [newUsername, setNewUsername] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [isNewOnline, setIsNewOnline] = useState(false);

  // Update Title State
  const [updatedusername, setUpdatedusername] = useState("");

  // File Upload State
  const [fileUpload, setFileUpload] = useState(null);

  const usersCollectionRef = collection(db, "users");

  const getUserList = async () => {
    try {
      const data = await getDocs(usersCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUserList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUserList();
  }, []);

  const onSubmitUsername = async () => {
    try {
      await addDoc(usersCollectionRef, {
        username: newUsername,
        age: newAge,
        Online: isNewOnline,
        userId: auth?.currentUser?.uid,
      });
      getUserList();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  const updateusername = async (id) => {
    const userDoc = doc(db, "users", id);
    await updateDoc(userDoc, { user: updatedusername });
  };

  const uploadFile = async () => {
    if (!fileUpload) return;
    const filesFolderRef = ref(storage, `projectFiles/${fileUpload.name}`);
    try {
      await uploadBytes(filesFolderRef, fileUpload);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="Ccontainer">
    <div className="CreatePost">
      <h3>Weather your worries away with UrFaveWeather</h3>
 <p>Get Ahead of the Weather and get the forecasting you deserve </p>
      <div >
        <input className="UserName"
          placeholder="User Name..."
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <input className="UserAge"
          placeholder="User Age..."
          type="number"
          onChange={(e) => setNewAge(Number(e.target.value))}
        />
        <input
          type="checkbox"
          checked={isNewOnline}
          onChange={(e) => setIsNewOnline(e.target.checked)}
        />
        <label> User Status</label>
        <button onClick={onSubmitUsername}> Submit User</button>
      </div>
      <div>
        {userList.map((user) => (
          <div className="Con">
            <h4 style={{ color: user.online ? "green" : "red" }}>
              {user.username}
            </h4>
            <p> age: {user.age} </p>

            <button onClick={() => deleteUser(user.id)}> Delete User</button>

            <input
              placeholder="new name..."
              onChange={(e) => setUpdatedusername(e.target.value)}
            />
            <button onClick={() => updateusername(user.id)}>
              {" "}
              Update username
            </button>
          </div>
        ))}
      </div>

      <div>
        <input type="file" onChange={(e) => setFileUpload(e.target.files[0])} />
        <button onClick={uploadFile}> Upload File </button>
      </div>
    </div>
    </div>
  );
}

export default CreatePost;

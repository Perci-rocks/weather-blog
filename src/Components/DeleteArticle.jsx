import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db, storage } from "../config/firebase";
import { toast } from "react-toastify";
import { deleteObject, ref } from "firebase/storage";

const DeleteArticle =({ id, imageUrl }) =>{
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      try {
        await deleteDoc(doc(db, "Articles", id));
        toast("Article deleted successfully", { type: "success" });
        const storageRef = ref(storage, imageUrl);
        await deleteObject(storageRef);
      } catch (error) {
        toast("Error deleting article", { type: "error" });
        console.log(error);
      }
    }
  };
  return (
    <div>
      <button
        className="btn btn-danger"
        onClick={handleDelete}
        style={{ cursor: "pointer" }}>DeleteArticle</button>
      
    </div>
  );
}
export default DeleteArticle;
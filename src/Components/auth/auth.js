import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, googleprovider ,githubProvider  } from "../../config/firebase";
import {signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import "./auth.css" // Import CSS file


export const Auth = ({ user , setIsAuth}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // State for error message
    const navigate = useNavigate(); // Hook for navigation
    console.log(auth?.currentUser?.email)

    const login = async () => {
        try {
            // Sign in with email and password
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/Home");
            // Redirect user to "/weather" path after successful sign-in
            // Replace with your navigation logic
           
        } catch (error) {
            // Handle any errors during sign-in
            console.error("Error signing in:", error.message);
            // Set error message based on error code
            if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
                setErrorMessage("User not found. Please sign up.");
            } else {
                setErrorMessage("An error occurred. Please try again later.");
            }
        }
    };
    const signInWithGoogle = async () => {
        try {
            // Sign in with Google
            await signInWithPopup(auth, googleprovider);
            navigate("/Home");
           
            
        } catch (error) {
            // Handle any errors during sign-in
            console.error("Error signing in with Google:", error.message);
            setErrorMessage("An error occurred. Please try again later.");
        }
    };
    const signInWithGitHub = async () => {
        try {
            // Sign in with GitHub popup
            await signInWithPopup(auth, githubProvider);
            navigate("/Home");
          
        } catch (error) {
            // Handle any errors during sign-in with GitHub
            console.error("Error signing in with GitHub:", error.message);
            setErrorMessage("An error occurred. Please try again later.");
        }
    };

    const logout = async () => {
        try {
            // Sign out the user
            await signOut(auth).then(() =>{
        localStorage.clear()
    
        });
            navigate("/");
           
        } 
        catch (error) {
            // Handle any errors during sign-out
            console.error("Error signing out:", error.message);
        }
    };

    return (
        <div className="auth-container">
          <h1 className="welcome-heading">Welcome to UrFaveWeather</h1> 
          {!user ? (
            <>
              <h2>Login</h2>
              <input
                className="input-field"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="input-field"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="button" onClick={login}>Login</button>
              <p className="error-message">{errorMessage}</p> {/* Display error message */}
              <button className=" button  button-google" onClick={signInWithGoogle}> Sign In With Google
              </button>
              <button className="button button-github" onClick={signInWithGitHub}>Sign In With GitHub</button>
              <p className="signup-link">Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </>
          ) : (
            <button className="button button-logout" onClick={logout}>Logout</button>
          )}
        </div>
      );
    };
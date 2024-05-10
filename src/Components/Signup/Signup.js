// Signup.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Signup.css";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Hook for navigation

    
    const signUp = async () => {
        try {
            // Create user with email and password
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/Home"); 
          
        } catch (error) {
            // Handle any errors during sign-up
            console.error("Error signing up:", error.message);
        }
    };

    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <input
                className="input-field"
                placeholder="Email..."
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="input-field"
                placeholder="Password..."
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="signup-button" onClick={signUp}>Sign Up</button>
        </div>
    );
};

export default Signup;

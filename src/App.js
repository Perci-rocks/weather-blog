import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Auth } from "./Components/auth/auth.js";
import Signup from "./Components/Signup/Signup.js";
import WeatherApp from "./Components/WeatherApp/WeatherApp.jsx";
import CreatePost from "./Components/CreatePost/CreatePost.js";
import Home from "./Components/Fohon/Home.js"; // Adjust the import statement


const App = () => {
    const user = null; // You can get user authentication status here

    return (
        <Router>
            
            <Routes>
                <Route path="/" element={<Auth user={user} />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/weather" element={<WeatherApp />} />
                <Route path="/create" element={<CreatePost />} />
                <Route path="/Home" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default App;

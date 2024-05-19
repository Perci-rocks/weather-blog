import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth } from "./Components/auth/auth.js";
import Signup from "./Components/Signup/Signup.js";
import WeatherApp from "./Components/WeatherApp/WeatherApp.jsx";
import Article from "./Components/Article";
import  AddArticle   from "./Components/AddArticle";
import Articles from "./Components/Articles";
import Navbar from "./Components/Navbar";


const App = () => {
    const user = null; // You can get user authentication status here

    return (
        <div className="Acontainer">
        <Router>
            <Routes>
                <Route path="/" element={<Auth user={user} />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/weather" element={<WeatherApp />} />
                <Route path="/article/:id" element={<Article/>} />
                <Route
            path="/Home"
            element={
              <div className="row mt-5">
                <div className="col-md-8">
                  <Articles />
                </div>
                <div className="col-md-4">
                  <AddArticle />
                </div>
              </div>

            }
          />
                </Routes>
                <Navbar />     
        </Router>
        </div>
    );
};

export default App;

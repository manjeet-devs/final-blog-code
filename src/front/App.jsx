import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import getRoutes from "../routes/route";
import "./style/stylesheet.css";

function FrontApp() { 
    const [routes, setRoutes] = useState([]); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getRoutes();
                console.log("Fetched routes:", response); 
                setRoutes(response); 
                setLoading(false);  
            } catch (error) {
                console.error("Error fetching documents:", error);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // ✅ Fixed condition
    }

    return (
        <Router>
            <Header />
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />  
                ))}
            </Routes>
            <Footer />
        </Router>
    );
}

export default FrontApp;

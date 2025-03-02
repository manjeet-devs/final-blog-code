import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import getRoutes from "../routes/route";
import "./style/stylesheet.css";

function FrontApp() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [routes, setRoutes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getRoutes();
                setRoutes(response);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching documents:", error);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Router>
            <div className="flex">
                
                <div className="flex-1">
                    <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
                    <main className="flex justify-center">
                        <Routes>
                            {routes.map((route, index) => (
                                <Route key={index} path={route.path} element={route.element} />
                            ))}
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default FrontApp;

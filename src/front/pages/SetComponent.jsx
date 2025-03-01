import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFoundPage";
import getSeo from "../../models/appWriteService/seoUrl.js"

const SetComponent = () => {
    const { path } = useParams();
    const [seoRoutes, setSeoRoutes] = useState([]);
    const [isSeoUrl, setIsSeoUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const  modelServe = import.meta.env.VITE_APPWRITE_SERVICE;
    

    useEffect(() => {
        async function fetchSeoUrls() {
            console.log(modelServe);
            try {
                const seo = (modelServe == true) ? await getSeo() : [{"hi":"hiiiii"}];
                console.log("reached...", seo);
                setSeoRoutes(seo);
            } catch (error) {
                console.error("Error fetching SEO URLs:", error);
                setSeoRoutes([]);
            } finally {
                setLoading(false);
            }
        }
        fetchSeoUrls();
    }, []);

    useEffect(() => {
        if (!loading) {
            let matchedRoute = null;
            seoRoutes.forEach((item) => {
                console.log(item.url, path);

                if (item.url == path) {
                    matchedRoute = item.file;
                }
            });
            setIsSeoUrl(matchedRoute);
        }
    }, [path, seoRoutes, loading]);

    if (loading) return <div>Loading...</div>;
    return (
        <>
            {isSeoUrl === 'article' ? <NotFound /> :
                isSeoUrl === 'category' ? <NotFound /> :
                    isSeoUrl === 'static' ? <NotFound /> :
                        <NotFound />}
        </>
    );
};

export default SetComponent;

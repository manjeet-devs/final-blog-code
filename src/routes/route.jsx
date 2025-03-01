import components from "../front/pages/index.js";
import getSeo from "./seoUrl.js"

const RoutesComponent = async () => {
    const seoData = await getSeo();
    return [
        { path: "/", element: <components.HomePage /> },
        { path: "/services", element: <components.ServicesPage /> },
        { path: "/about", element: <components.AboutPage /> },
        { path: "/contact", element: <components.ContactPage /> },
        { path: "/static/:id", element: <components.StaticPage /> },
        { path: "/login", element: <components.LoginPage /> },
        { path: "/category/:id", element: <components.CategoryPage /> },
        { path: "/:path", element: <components.SetComponent /> }
    ];
};

export default RoutesComponent;

import components from "../front/pages/index.js";
const RoutesComponent = async () => {
    return [
        { path: "/", element: <components.HomePage /> },
        { path: "/blog", element: <components.HomePage /> },
        { path: "/services", element: <components.ServicesPage /> },
        { path: "/about", element: <components.AboutPage /> },
        { path: "/contact", element: <components.ContactPage /> },
        { path: "/static/:id", element: <components.StaticPage /> },
        { path: "/login", element: <components.LoginPage /> },
        { path: "/register", element: <components.RegisterPage /> },
        { path: "/blog/:id", element: <components.CategoryPage /> },
        { path: "/:path", element: <components.SetComponent /> }
    ];
};

export default RoutesComponent;

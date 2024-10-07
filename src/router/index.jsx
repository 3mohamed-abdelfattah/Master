import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import { HomePage, ProjectsPage, AboutPage, ContactsPage } from "@/pages/index.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/projects",
        element: <ProjectsPage />,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
    {
        path: "/contacts",
        element: <ContactsPage />,
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
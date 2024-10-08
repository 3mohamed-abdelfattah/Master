import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import { HomePage, ProjectsPage } from "@/pages/index.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/projects",
        element: <ProjectsPage />,
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Pages
import { HomePage, ProjectsPage } from "@/pages/index.js";
import { CVPage } from "../pages";

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
        path: "/cv",
        element: <CVPage />,
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
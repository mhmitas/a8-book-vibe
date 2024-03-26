import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root";
import Home from "../components/home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])
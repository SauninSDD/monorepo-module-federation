import {App} from "@/components/App/App";
import {Suspense} from "react";
import {LazyAbout} from "@/pages/about/LazyAbout";
import {createBrowserRouter} from "react-router-dom";

const adminRoutes = [
    {
        path: "/admin",
        element:
            <App/>,
        children: [
            {
                path: '/admin/about',
                element: <Suspense fallback={'Loading...'}> <LazyAbout/> </Suspense>

            }
        ]
    },
]

export const router = createBrowserRouter(adminRoutes);
export default adminRoutes;
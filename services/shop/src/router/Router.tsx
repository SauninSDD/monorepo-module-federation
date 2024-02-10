import {App} from "@/components/App/App";
import {Suspense} from "react";
import {Shop} from "@/pages/shop";
import {createBrowserRouter} from "react-router-dom";
import UserCard from "@packages/shared/src/components/UserCard";

const shopRoutes = [
    {
        path: "/shop",
        element:
            <App/>,
        children: [
            {
                path: '/shop/main',
                element: <Suspense fallback={'Loading'}> <Shop/> </Suspense>
            },
            {
                path: '/shop/second',
                element: <Suspense fallback={'Loading'}>
                    <div style={{color:'red'}}>
                        <h1>second</h1>
                        <UserCard username={'FROM SHOP'}/>
                    </div>
                </Suspense>
            }
        ]
    },
]
export const router = createBrowserRouter(shopRoutes);

export default shopRoutes;
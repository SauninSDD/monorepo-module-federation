import React from 'react';
import {Outlet} from "react-router-dom";
import UserCard from "@packages/shared/src/components/UserCard";
import {deepMerge} from "@packages/shared/src/utils/deepMerge";

export const App = () => {
    deepMerge();
    return (
        <div>
            <h1>Admin module</h1>
            <Outlet/>
            <UserCard username={'FROM ADMIN'}/>

        </div>
    );
};


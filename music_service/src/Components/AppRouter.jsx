import React from 'react';
import { useUser } from '../Store/store';
import {Route,Routes} from "react-router-dom";
import { NoAuthRoutes, UsersRoutes } from '../Routes/routes';
const AppRouter = () => {
    let isAuth = useUser(state => state.isAuth);
    let role = useUser(state => state.role);
    return (
        <Routes>
            {isAuth && role === "user" && UsersRoutes.map (({path, element}) => 
                <Route key={path} path={path} element={element} />) 
            }
            {!isAuth && NoAuthRoutes.map(({path, element}) => 
                <Route key={path} path={path} element={element} />)
            }
        </Routes>
    );
};

export default AppRouter;
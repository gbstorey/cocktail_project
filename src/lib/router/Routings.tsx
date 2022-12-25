
import {Routes, Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";

import RequireAuth from "lib/components/auth/RequireAuth";
import Page404 from "lib/pages/404";

import { routes} from "./routes";

const router = createBrowserRouter(
    createRoutesFromElements(<>
        {
            routes.map((routeProps) => (
                <Route {...routeProps} key={routeProps.path as string}/>
            ))
        }
        <Route path="*" element={<Page404 />} />
        </>
    )
)

export default router;

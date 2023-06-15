import AdminHome from "../pages/Admin/AdminHome";
import AdminRoot from "../pages/Admin/AdminRoot";
import AdminLogin from "../pages/Admin/AdminLogin";
import Reservations from "../pages/Admin/Reservations";
import AddImage from "../pages/Admin/AddImage";

import Home from "../pages/Main/Home";
import MainRoot from "../pages/Main/MainRoot";
import NotFound from "../pages/Main/NotFound";


export const ROUTES = [
    //Main Root - user side
    {
        path:'/',
        element:<MainRoot/>,
        children: [
            {
                path:'',
                element: <Home/>
            },
            {
                path:'*',
                element: <NotFound/>
            }
        ]
    },
    //Admin Root - admin side
    {
        path: '/admin',
        element: <AdminRoot/>,
        children: [
            {
                path:'',
                element: <AdminLogin/>
            },
            {
                path:'home',
                element:<AdminHome/>
            },
            {
                path:'reservations',
                element:<Reservations/>
            },
            {
                path:'imagees',
                element:<AddImage/>
            }
        ]
    }
]

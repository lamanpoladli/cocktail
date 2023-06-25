import AdminHome from "../pages/Admin/AdminHome";
import AdminRoot from "../pages/Admin/AdminRoot";
import AdminLogin from "../pages/Admin/AdminLogin";
import Dashboard from "../pages/Admin/Dashboard";
import Reservations from "../pages/Admin/Reservations";
import AddImage from "../pages/Admin/AddImage";
import AddCategory from "../pages/Admin/AddCategory";

import Home from "../pages/Main/Home";
import MainRoot from "../pages/Main/MainRoot";
import NotFound from "../pages/Main/NotFound";
import About from "../pages/Main/About/index";
import Menu from "../pages/Main/Menu";
import ReservPage from "../pages/Main/ReservPage/index";


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
            },
            {
                path:'about',
                element: <About/>
            },
            {
                path:'menu',
                element: <Menu/>
            },
            {
                path:'reserv',
                element: <ReservPage/>
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
                element:<AdminHome/>
            },
            {
                path:'login',
                element: <AdminLogin/>
            },
            {
                path:'reservations',
                element:<Reservations/>
            },
            {
                path:'imagees',
                element:<AddImage/>
            },
            {
                path:'categories',
                element:<AddCategory/>
            }
        ]
    }
]

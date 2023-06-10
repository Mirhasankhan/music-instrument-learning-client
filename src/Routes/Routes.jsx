import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import AllUsers from "../Dashboard/AllUsers";
import AddClass from "../Dashboard/AddClass";
import ManageClasses from "../Dashboard/ManageClasses";
import Instructors from "../Pages/Instructors/Instructors";
import MyClasses from "../Dashboard/MyClasses";
import SelectedClass from "../Dashboard/SelectedClass";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            // users related routes
            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>
            },
            // instructor related routes
            {
                path: 'addClass',
                element: <AddClass></AddClass>
            },
            {
                path: 'manageClass',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: 'myClasses',
                element: <MyClasses></MyClasses>
            },
            // student related routes
            {
                path: 'selected',
                element: <SelectedClass></SelectedClass>
            }
        ]
    }
])

export default router;
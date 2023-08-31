import { createBrowserRouter } from "react-router-dom";
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
import ErrorURL from "../Components/ErrorURL";
import InstructorHome from "../Dashboard/InstructorHome";
import AdminHome from "../Dashboard/AdminHome";
import StudentHome from "../Dashboard/StudentHome";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import StudentRoute from "./StudentRoute";
import Payment from "../Dashboard/Payment";
import PrivateRoute from "./PrivateRoute";
import EnrolledClass from "../Dashboard/EnrolledClass";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorURL></ErrorURL>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            // {
            //     path: '/login',
            //     element: <Login></Login>
            // },
           
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            }
        ]
    },

    // login signup layout
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    },
    // 
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // Admin related routes

            {
                path: 'allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'adminHome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'manageClass',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            // instructor related routes
            {
                path: 'instructorHome',
                element: <InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
            },
            {
                path: 'addClass',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },

            {
                path: 'myClasses',
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
            // student related routes
            {
                path: 'studentHome',
                element: <StudentRoute><StudentHome></StudentHome></StudentRoute>
            },
            {
                path: 'selected',
                element: <StudentRoute><SelectedClass></SelectedClass></StudentRoute>
            },
            {
                path: 'enrolled',
                element: <StudentRoute><EnrolledClass></EnrolledClass></StudentRoute>
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>
            }
        ]
    }
])

export default router;
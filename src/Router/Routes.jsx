import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../Pages/Layout/AdminLayout/AdminLayout";
import AdminDashboard from "../Pages/Layout/AdminLayout/AdminDashboard/AdminDashboard";
import AllStudents from "../Pages/Layout/AdminLayout/AllStudents/AllStudents";
import Register from "../Pages/Home/Auth/Register";
import UserVarification from "../Pages/Home/UserVarification/UserVarification";
import CourceMeterial from "../Pages/Home/CourceMeterial/CourceMeterial";
import NotFound from "../Pages/Shared/NotFound";
import ExamDate from "../Pages/Home/ExamDate/ExamDate";
import AllUsers from "../Pages/Home/AllUsers/AllUsers";
import ExamQuestion from "../Pages/Home/ExamQus/ExamQuestion";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AdminLayout />,
        children: [
            {
                path: "/admin-dashboard",
                element: <AdminDashboard />,
            },
            {
                path: "/all-students",
                element: <AllStudents />,
            },
            {
                path: "/users",
                element: <AllUsers />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/verification",
                element: <UserVarification />,
            },
            {
                path: "/course-material",
                element: <CourceMeterial />,
            },
            {
                path: "/exam-date",
                element: <ExamDate />,
            },
            {
                path: "/exam-question",
                element: <ExamQuestion />,
            },
            {
                path: "*",
                element: <NotFound />,
            }
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    }
]);

export default router;

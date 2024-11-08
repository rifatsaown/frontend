import { createBrowserRouter } from 'react-router-dom';
import AllUsers from '../Pages/Home/AllUsers/AllUsers';
import Register from '../Pages/Home/Auth/Register';
import CourceMeterial from '../Pages/Home/CourceMeterial/CourceMeterial';
import ExamDate from '../Pages/Home/ExamDate/ExamDate';
import ExamQuestion from '../Pages/Home/ExamQus/ExamQuestion';
import ExamResult from '../Pages/Home/ExamResult/ExamResult';
import UserVarification from '../Pages/Home/UserVarification/UserVarification';
import VerifyCertificed from '../Pages/Home/VerifyCertificed/VerifyCertificed';
import AdminDashboard from '../Pages/Layout/AdminLayout/AdminDashboard/AdminDashboard';
import AdminLayout from '../Pages/Layout/AdminLayout/AdminLayout';
import NotFound from '../Pages/Shared/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AdminLayout />,
    children: [
      {
        path: '/admin-dashboard',
        element: <AdminDashboard />,
      },
      {
        path: '/users',
        element: <AllUsers />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/verification',
        element: <UserVarification />,
      },
      {
        path: '/course-material',
        element: <CourceMeterial />,
      },
      {
        path: '/exam-date',
        element: <ExamDate />,
      },
      {
        path: '/exam-question',
        element: <ExamQuestion />,
      },
      {
        path: '/exam-result',
        element: <ExamResult />,
      },
      {
        path: '/verify-certificate',
        element: <VerifyCertificed />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;

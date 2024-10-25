import { NavLink, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center p-4">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden mt-4"
          >
            Open Menu
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-blue-100 text-gray-800 shadow-lg min-h-full w-64 p-4">
            <li className="menu-title mb-2">
              <span className="text-lg font-semibold">Admin Panel</span>
            </li>
            <li>
              <NavLink to="/register" className="hover:text-blue-500">
                Register - Step 1
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className="hover:text-blue-500">
                Users - Step 2
              </NavLink>
            </li>
            <li>
              <NavLink to="/verification" className="hover:text-blue-500">
                Verification - Step 3
              </NavLink>
            </li>
            <li>
              <NavLink to="/course-material" className="hover:text-blue-500">
                Course Material - Step 4
              </NavLink>
            </li>
            <li>
              <NavLink to="/exam-date" className="hover:text-blue-500">
                Exam Date - Step 5
              </NavLink>
            </li>
            <li>
              <NavLink to="/exam-question" className="hover:text-blue-500">
                Exams - Step 6
              </NavLink>
            </li>
            <li>
              <NavLink to="/exam-result" className="hover:text-blue-500">
                Results - Step 7
              </NavLink>
            </li>
            <li>
              <NavLink to="/verify-certificate" className="hover:text-blue-500">
                Verify Certificate - Step 8
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin-dashboard" className="hover:text-blue-500">
                Dashboard - Step 9
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;

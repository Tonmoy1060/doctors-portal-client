import React from "react";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <div>
      
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col m-5 p-5">
          {/* <!-- Page content here --> */}
          <h1 className="text-2xl font-bold text-purple-500">Welcome to your DashBoard</h1>
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 mr-5 overflow-y-auto w-50 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to={"/dashboard"} >My Appointments</Link>
            </li>
            <li>
              <Link to={"/dashboard/review"}>My Reviews</Link>
            </li>
            {admin && <li>
              <Link to={"/dashboard/users"}>All Users</Link>
            </li>}
            {admin && <li>
              <Link to={"/dashboard/doctors"}>Add Doctor</Link>
            </li>}
            {admin && <li>
              <Link to={"/dashboard/manageDoctor"}>Manage Doctor</Link>
            </li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

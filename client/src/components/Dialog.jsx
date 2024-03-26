import { Link } from "react-router-dom";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import UserList from "./Admin/UserList";
import useAuth from "../hook/useAuth";
import useAdmin from "../hook/useAdmin";
import { Outlet } from "react-router-dom";

const Dialog = () => {
  // const [whatMenu , setWhatMenu] = useState("")
  const { logout } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  console.log(isAdmin);
  return (
    <div>
      {isAdmin ? (
        <div className="flex">
          <div className="md:w-1/4">
            <div className="drawer lg:drawer-open">
              <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer-2"
                  className="btn btn-circle btn-primary drawer-button lg:hidden"
                >
                  <RxHamburgerMenu />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-2"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                  <div className="flex flex-row items-center ">
                    <img src="/logo.png" alt="" className="h-20 mx-0" />
                    <button className="btn btn-sm btn-primary rounded-full">
                      ADMIN
                    </button>
                  </div>
                  {/* Sidebar content here */}
                  <hr className="h-px my-4 bg-gray-100 border-0 dark:bg-gray-300"></hr>
                  <li className="border-0">
                    <a>Dashboard</a>
                  </li>
                  <li>
                    <a>Manage Orders</a>
                  </li>
                  <Link to={"/shop/createProduct"}>
                    <li>
                      <a>Add Product</a>
                    </li>
                  </Link>
                  <Link to={"/dashboard/listProduct"}>
                    <li>
                      <a>Manage Item</a>
                    </li>
                  </Link>
                  <Link to={"/dashboard/users"}>
                    <li>
                      <a>All Users</a>
                    </li>
                  </Link>

                  <hr className="h-px my-4 bg-gray-100 border-0 dark:bg-gray-300"></hr>
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Product</a>
                  </li>
                  <li>
                    <a>Order Tracking</a>
                  </li>
                  <li>
                    <a>Customer Support</a>
                  </li>
                  <li onClick={logout}>
                    <a>Log out</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-3/4 ml-10 ">
            <Outlet />
          </div>
        </div>
      ) : (
        <button className="btn btn-outline btn-sx sm:btn-sm lg:btn-lg sm:hidden flex items-center gap-2 btn-warning">
          <FaUser /> Logout
        </button>
      )}
    </div>
  );
};

export default Dialog;
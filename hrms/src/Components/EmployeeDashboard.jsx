import { useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect } from "react";
import { MdContactMail } from "react-icons/md";
import { IoReorderThree } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { TbZoomMoney } from "react-icons/tb";
import { FaCalendarTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const EmployeeDashboard = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleLogout = () => {
    axios
      .get("http://localhost:3000/employee/logout")
      .then((result) => {
        if (result.data.Status) {
          localStorage.removeItem("valid");
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } h-screen p-5  pt-8 relative duration-300 bg-purple-700`}
      >
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
            alt="Logo"
            onClick={() => setOpen(!open)}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Innovate Nepal
          </h1>
        </div>
        <div>
          <div className="mt-4">
            {/* <Link
              to="/employee_dashboard"
              className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4"
            >
              <BsSpeedometer2 color="white" size={25} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Dashboard
                </span>
              </Link> */}
            <Link
              to={"/employee_dashboard/employee_detail/" + id}
              className="flex rounded-md p-2 cursor-pointer hover:bg-light-white  hover:bg-purple-500 text-gray-300 text-sm items-center gap-x-4"
            >
              <IoMdContact color="white" size={25} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Profile
              </span>
            </Link>
            <Link
              to={"/employee_dashboard/contact/" + id}
              className="flex rounded-md p-2 cursor-pointer hover:bg-light-white  hover:bg-purple-500 text-gray-300 text-sm items-center gap-x-4"
            >
              <MdContactMail color="white" size={25} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Employee
              </span>
            </Link>
            <Link
              to={"/employee_dashboard/salary/" + id}
              className="flex rounded-md p-2 cursor-pointer hover:bg-light-white  hover:bg-purple-500 text-gray-300 text-sm items-center gap-x-4"
            >
              <TbZoomMoney color="white" size={25} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Payroll
              </span>
            </Link>
            <Link
              to={"/employee_dashboard/attendance/" + id}
              className="flex rounded-md p-2 cursor-pointer hover:bg-light-white  hover:bg-purple-500 text-gray-300 text-sm items-center gap-x-4"
            >
              <CiCalendarDate color="white" size={25} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Attendance
              </span>
            </Link>
            <Link
              to={"/employee_dashboard/leave/" + id}
              className="flex rounded-md p-2 cursor-pointer hover:bg-light-white  hover:bg-purple-500 text-gray-300 text-sm items-center gap-x-4"
            >
              <FaCalendarTimes color="white" size={25} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Leave
              </span>
            </Link>

            <li
              onClick={handleLogout}
              className="flex rounded-md p-2 cursor-pointer hover:bg-light-white  hover:bg-purple-500 text-gray-300 text-sm items-center gap-x-4"
            >
              <CiLogout color="white" size={25} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Logout
              </span>
            </li>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="p-2 w-[100%] flex justify-center shadow">
          <h4 className="text-xl">Employee Management System</h4>
        </div>

        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default EmployeeDashboard;

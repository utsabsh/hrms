import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
useEffect;

const Start = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3000/verify")
      .then((result) => {
        if (result.data.Status) {
          if (result.data.role === "admin") {
            navigate("/dashboard");
          } else {
            navigate("/employee_detail/" + result.data.id);
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex justify-center items-center h-screen loginPage">
      <div className="p-3 rounded w-1/4 border loginForm">
        <h2 className="text-center">Login As</h2>
        <div className="flex justify-between mt-5 mb-2">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              navigate("/employee_login");
            }}
          >
            Employee
          </button>
          <button
            type="button"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              navigate("/adminlogin");
            }}
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;

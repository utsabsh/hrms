import React from "react";

function Login() {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-14 items-center my-2 mx-5 md:mx-0 md:my-0 ">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="border-r-[3px] border-slate-950"></div>
      <div className="md:w-1/3 max-w-sm border p-3 bg-slate-200 rounded shadow-lg md:ml-6">
        <div className="text-center md:text-left">
          <h1 className="text-center mb-5 font-bold italic text-xl underline ">
            Login to infotech hrms
          </h1>
        </div>
        <form className="flex flex-col ">
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="email"
            name="email"
            placeholder="Email Address"
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
          />
          <div className="mb-1 mt-2">
            <input type="checkbox" name="tick" id="tick" className="me-2" />
            <label htmlFor="password">
              You are Agree with terms & conditions
            </label>
          </div>

          <div className="text-center">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;

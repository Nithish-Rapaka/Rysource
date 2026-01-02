import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-100 to-blue-300 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-center text-blue-700">
          Welcome to Rysource
        </h2>
        <p className="text-center text-gray-500 mt-1">Create your account</p>

        <form className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 rounded-xl bg-gray-100 text-gray-700
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-xl bg-gray-100 text-gray-700
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-xl
            font-semibold hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
        </form>

        
        <p className="text-center text-sm text-gray-500 mt-4">
          Had an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;

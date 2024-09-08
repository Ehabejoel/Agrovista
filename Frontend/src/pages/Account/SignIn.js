import React, { useState } from "react";
import { Link } from "react-router-dom"
import { Agri2, Facebooklogo, Googlelogo } from "../../assets/images";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email) {
      setErrEmail("Enter your email");
    }

    if (!password) {
      setErrPassword("Create a password");
    }

    if (email && password) {
      setSuccessMsg(
        `Hello dear, Thank you for your attempt. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
      );
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-green-100 font-sans">
      <div className="w-4/5 md:w-3/5 lg:w-2/3 bg-white flex rounded-lg shadow-lg overflow-hidden">
        {/* Left Side */}
        <div className="w-1/2 bg-[#088d34] text-white flex flex-col items-center p-5 relative">
          <img src={Agri2} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
        </div>

        {/* Right Side */}
        <div className="w-1/2 flex flex-col justify-center items-center p-5">
          <div className="w-full max-w-sm">
            {successMsg ? (
              <div className="w-full flex flex-col justify-center">
                <p className="w-full px-4 py-10 text-green-500 font-medium">
                  {successMsg}
                </p>
                <Link to="/signup">
                  <button
                    className="w-full h-10 bg-[#088d34] text-gray-200 rounded-md text-base font-semibold 
                    tracking-wide hover:bg-black hover:text-white duration-300"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            ) : (
              <>
                <h2 className="text-2xl mb-5">Login to AgroVista</h2>
                
                <p className="text-base mb-4 text-gray-500" >Welcome back! login with your data that you entered during registration</p>
                  
               
                <div className="flex flex-col space-y-3 mb-5">
                  <button className="bg-white border border-gray-300 py-1.5 px-1 flex items-center justify-center rounded-md shadow-lg">
                    <img src={Googlelogo} alt="Google" className="w-5 mr-2" />
                    Continue with Google
                  </button>
                  <button className="bg-white border border-gray-300 py-1.5 px-4 flex items-center justify-center rounded-md shadow-lg">
                    <img src={Facebooklogo} alt="Facebook" className="w-5 mr-2" />
                    Continue with Facebook
                  </button>
                </div>
                <div className="flex items-center mb-5">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="px-3 text-gray-400">OR</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <form className="flex flex-col space-y-2" onSubmit={handleSignUp}>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmail}
                    className="p-2 border border-gray-300 rounded-md"
                  />
                  {errEmail && (
                    <p className="text-sm text-red-500">
                      <span className="font-bold italic mr-1">!</span>
                      {errEmail}
                    </p>
                  )}
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePassword}
                    className="p-2 border border-gray-300 rounded-md"
                  />
                  {errPassword && (
                    <p className="text-sm text-red-500">
                      <span className="font-bold italic mr-1">!</span>
                      {errPassword}
                    </p>
                  )}
                  <div className="flex justify-between items-center text-sm">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Remember me
                    </label>
                    <a href="#" className="text-[#088d34]">Forgot Password?</a>
                  </div>
                  <button
                    type="submit"
                    className="p-3 bg-[#088d34] text-white rounded-md"
                  >
                    Sign In
                  </button>
                </form>
                <div className="text-center mt-5">
                  <p className="text-sm">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-[#088d34]">Sign Up</Link>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
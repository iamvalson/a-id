import { TriangleAlert } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


const LoginForm = () => {
  const navigate = useNavigate()
  return (
    <form className="space-y-6 w-full max-w-xs">
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            type="checkbox"
            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
            Remember me
          </label>
        </div>
        <a href="#" className="text-sm font-medium text-primary hover:text-primary/80">
          Forgot password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-secondary hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
        onClick = {() => {
          navigate("/")
        }}
      >
        Login
      </button>
    </form>
  )
};

const SignupForm = () => {
  const navigate = useNavigate()

  return(  <form className="space-y-6 w-full max-w-xs">
    <Navbar />
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">Full Name</label>
      <input
        type="text"
        placeholder="Enter your full name"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
    </div>
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
    </div>
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">Password</label>
      <input
        type="password"
        placeholder="Create a password"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
    </div>
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
      <input
        type="password"
        placeholder="Confirm your password"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
    </div>
    <div className="flex items-center">
      <input
        id="terms"
        type="checkbox"
        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
      />
      <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
        I agree to the <a href="#" className="text-primary hover:text-primary/80">Terms</a> and <a href="#" className="text-primary hover:text-primary/80">Privacy Policy</a>
      </label>
    </div>
    <button
      type="submit"
            onClick = {() => {
          navigate("/")
        }}
      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-secondary hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
    >
      Create Acount
    </button>
  </form> )
};

const Login = () => {
  const [mode, setMode] = useState("login");

  return (
    <div className="min-h-screen bg-gradient-to-t fron-white to-lightblue flex flex-col justify-between pb-32">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-16 w-auto"
            src="./src/assets/mini_logo.png"
            alt="Logo"
          />
          <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
            {mode === "login" ?
              (
                <div>
                  <span className="text-secondary">Log </span>
                  <span className="text-primary">In</span>
                </div>
              )
              :
              (
                <div>
                  <span className="text-secondary">Create </span>
                  <span className="text-primary">Account</span>
                </div>
              )
            }
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="py-2 px-4 sm:rounded-lg sm:px-10">
            <div className="flex mb-6 rounded-full p-1 bg-gray-100">
              <button
                onClick={() => setMode("login")}
                className={`flex-1 py-2 rounded-full text-sm font-medium ${mode === "login" ? 'bg-lightblue shadow text-primary' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Login
              </button>
              <button
                onClick={() => setMode("signup")}

                className={`flex-1 py-2 rounded-full text-sm font-medium ${mode === "signup" ? 'bg-lightblue shadow text-primary' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Sign Up
              </button>
            </div>

            {
              {
                login: <LoginForm />,
                signup: <SignupForm />,
              }[mode]
            }


          </div >
        </div>
      </div>

      <div className="fixed bottom-0 flex flex-col gap-2 flex-center pt-6 pb-8 bg-primary/30 rounded-t-5xl w-screen ">
        <span className="font-bold text-primary">IT'S AN EMERGENCY !</span>
        <button className="flex gap-1 w-auto px-8 py-2 bg-white outline-1 outline-primary text-primary font-semibold rounded-full hover:scale-105s transition duration-300">
          <TriangleAlert className="color-primary inline" />
          It's an emergency!
        </button>
      </div>
    </div>

  )
}

export default Login;
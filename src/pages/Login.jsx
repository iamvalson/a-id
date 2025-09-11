import { TriangleAlert } from "lucide-react";
import { useState } from "react";

const LoginForm = () => (
    <form className="space-y-4 flex flex-col w-full items-center">
        <div className="w-full">
            <label>Email</label>
            <input type="email" placeholder="youreamil@ymail.com" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div>
            <label>Password</label>
            <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div className="self-start flex items-center gap-2">
            <input type="checkbox" className="accent-secondary  size-4" />
            Remember me
        </div>
        <button type="submit" className=" w-auto px-10 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition duration-300">Login</button>
    </form>
);

const SignupForm = () => (
    <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <button type="submit" className="w-full p-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300">Sign Up</button>
        <div>
            <input type="checkbox" />
            Remember me
        </div>
    </form>
);

const Login = () => {
    const mode = useState("login")

    return (
        <div className="flex flex-center w-screen h-screen bg-white">
            <section className="flex flex-center flex-col gap-2 max-w-xs mx-auto -mt-18">

                <h2 className="text-4xl font-bold mb-10">
                    <span className="text-blue-600">Know</span>
                    <span className="text-red-600">FirstAid</span>
                </h2>

                <div className="mb-2">
                    <div className="flex flex-center p-2 bg-gray-00 rounded-full">
                        <button className="bg-primary/10 text-gray-700 font-semibold px-5 py-2 rounded-l-full">Login</button>
                        <button className="bg-primary/10 text-gray-700 font-semibold px-5 py-2 rounded-r-full">SignUp</button>
                    </div>
                </div>

                <LoginForm />

                <div className="absolute bottom-0 flex flex-col gap-2 flex-center pt-6 pb-8 bg-red-600/10 rounded-t-5xl w-screen ">
                    <span className="font-bold text-primary">IT'S AN EMERGENCY !</span>
                    <button className="flex gap-1 w-auto px-8 py-2 bg-white outline-1 outline-primary text-primary font-semibold rounded-full hover:scale-105s transition duration-300">
                        <TriangleAlert className="color-primary inline" />
                        It's an emergency!
                    </button>
                </div>
            </section >
        </div>
    )
}

export default Login;
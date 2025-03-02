import React from 'react';
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center h-screen ">
            <div className=" p-6  bg-white rounded-lg shadow-md dark:bg-gray-100 dark:text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-3xl sm:text-4xl font-bold">Sign in</h1>
                    <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
                </div>
                <form noValidate className="space-y-6">
                    <div className="space-y-4">
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder="leroy@jenkins.com" 
                                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-violet-400 focus:border-violet-500 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <Link to="/forgot-password" className="text-xs hover:underline text-violet-600">
                                    Forgot password?
                                </Link>
                            </div>
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder="*****" 
                                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-violet-400 focus:border-violet-500 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                            />
                        </div>
                    </div>

                    {/* Sign-in Button */}
                    <div className="space-y-2">
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-white hover:bg-violet-700">
                            Sign in
                        </button>
                        <p className="px-6 text-sm text-center dark:text-gray-600">
                            Don't have an account yet?
                            <Link to="/signup" className="ml-1 hover:underline text-violet-600">
                                Sign up
                            </Link>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;

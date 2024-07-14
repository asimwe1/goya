import Link from 'next/link';
import React from 'react';

const Signup = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <img
                        className="mx-auto h-[10rem] w-auto"
                        src="/logo.png"
                        alt="Logo"
                    />
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Create New Account
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Already Registered?{' '}
                        <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                            log in
                        </a>
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="rounded-md shadow-sm space-y-[2rem]">
                        <div className="text-center">
                            <label htmlFor="name" className="block text-gray-700 font-serif text-[1.6rem]">
                                NAME
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className="appearance-none bg-[#ececec] border-none rounded-[10px] block w-full px-3 py-[0.8rem] border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Alexis Murenzi"
                            />
                        </div>
                        <div className="text-center">
                            <label htmlFor="email-address" className="block text-gray-700 font-serif font-serif text-[1.6rem]">
                                EMAIL
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none  bg-[#ececec] border-none rounded-[10px] block w-full px-3 py-[0.8rem] border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="goyoungafrica@gmail.com"
                            />
                        </div>
                        <div className="text-center">
                            <label htmlFor="password" className="block text-gray-700 font-serif text-[1.5rem]">
                                PASSWORD
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none border-none bg-[#ececec] rounded-[10px] block w-full px-3 py-[0.8rem] border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                        <div className="text-center">
                            <label htmlFor="dob" className="block text-gray-700 font-serif text-[1.6rem]">
                                Date of Birth
                            </label>
                            <input
                                id="dob"
                                name="dob"
                                type="date"
                                required
                                className="appearance-none border-none bg-[#ececec] rounded-[10px] block w-full px-3 py-[0.8rem] border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            />
                        </div>
                    </div>

                    <Link href={''}>
                    water
                    </Link>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center text-center py-[1.2rem] px-4 border border-transparent text-sm font-bold text-[1rem] rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >                        <Link href={'/continue-as'} >

                            Sign up
                            </Link>

                        </button>
            </div>
        </form>
      </div >
    </div >
  );
};

export default Signup;

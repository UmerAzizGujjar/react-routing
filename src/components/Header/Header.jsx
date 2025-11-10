import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200 shadow-sm">
            <nav className="px-4 lg:px-6 py-4">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center group">
                        <div className="bg-linear-to-r from-blue-600 to-purple-600 p-2 rounded-lg mr-3 transform group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                        </div>
                        <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            ReactRouter
                        </span>
                    </Link>
                    <div className="flex items-center lg:order-2 gap-2">
                        <Link
                            to="#"
                            className="text-gray-700 hover:text-blue-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2.5 transition-colors duration-300"
                        >
                            Sign in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-medium rounded-lg text-sm px-5 lg:px-6 py-2.5 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Get Started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-300 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 lg:p-0 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 ${isActive ? 'after:w-full' : ''}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-300 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 lg:p-0 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 ${isActive ? 'after:w-full' : ''}`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-300 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 lg:p-0 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 ${isActive ? 'after:w-full' : ''}`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-300 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 lg:p-0 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 ${isActive ? 'after:w-full' : ''}`
                                    }
                                >
                                    GitHub
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}



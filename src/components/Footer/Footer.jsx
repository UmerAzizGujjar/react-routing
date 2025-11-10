import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center group mb-4">
                            <div className="bg-linear-to-r from-blue-600 to-purple-600 p-2 rounded-lg mr-3">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                            </div>
                            <span className="text-2xl font-bold text-white">ReactRouter</span>
                        </Link>
                        <p className="text-gray-400 mb-4 max-w-md">
                            Building modern web applications with React Router.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-blue-400 transition-colors duration-300">Home</Link></li>
                            <li><Link to="/about" className="hover:text-blue-400 transition-colors duration-300">About</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-400 transition-colors duration-300">Contact</Link></li>
                            <li><Link to="/github" className="hover:text-blue-400 transition-colors duration-300">GitHub</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Documentation</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Tutorials</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Blog</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Support</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">© 2025 ReactRouter. All rights reserved.</p>
                        <div className="flex gap-6 text-sm">
                            <Link to="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Privacy</Link>
                            <Link to="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Terms</Link>
                            <Link to="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Cookies</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-linear-to-b from-gray-50 to-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-linear-to-r from-blue-600 to-purple-600 h-32"></div>
          <div className="relative px-8 pb-8">
            <div className="absolute -top-16 left-8">
              <div className="w-32 h-32 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <div className="w-28 h-28 bg-linear-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">{userid ? userid.charAt(0).toUpperCase() : 'U'}</span>
                </div>
              </div>
            </div>
            <div className="pt-20">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    User Profile
                  </h1>
                  <p className="text-lg text-gray-600">
                    User ID: <span className="font-semibold text-blue-600">{userid}</span>
                  </p>
                </div>
                <button className="px-6 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300">
                  Follow
                </button>
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600">1.2K</div>
                  <div className="text-sm text-gray-600 mt-1">Followers</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600">850</div>
                  <div className="text-sm text-gray-600 mt-1">Following</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-pink-600">42</div>
                  <div className="text-sm text-gray-600 mt-1">Posts</div>
                </div>
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
                <p className="text-gray-600 leading-relaxed">
                  This is a demo user profile page showcasing dynamic routing with React Router. 
                  The user ID is dynamically loaded from the URL parameter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;

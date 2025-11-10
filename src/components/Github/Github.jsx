import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    
    return (
        <div className="bg-linear-to-b from-gray-50 to-white min-h-screen py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                        GitHub <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Profile</span>
                    </h1>
                    <p className="text-xl text-gray-600">
                        Fetched live from GitHub API
                    </p>
                </div>

                {/* Profile Card */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
                    <div className="bg-linear-to-r from-blue-600 to-purple-600 h-40"></div>
                    <div className="relative px-8 pb-8">
                        {/* Avatar */}
                        <div className="absolute -top-20 left-8">
                            <img 
                                src={data?.avatar_url} 
                                alt={data?.name}
                                className="w-40 h-40 rounded-full border-8 border-white shadow-xl"
                            />
                        </div>
                        
                        {/* Profile Info */}
                        <div className="pt-24">
                            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                        {data?.name || 'GitHub User'}
                                    </h2>
                                    <a 
                                        href={data?.html_url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-lg text-blue-600 hover:text-blue-700 mb-2 inline-flex items-center gap-2"
                                    >
                                        @{data?.login}
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                    {data?.bio && (
                                        <p className="text-gray-600 mt-4 max-w-2xl">{data.bio}</p>
                                    )}
                                    {data?.location && (
                                        <div className="flex items-center gap-2 text-gray-600 mt-4">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span>{data.location}</span>
                                        </div>
                                    )}
                                </div>
                                <a 
                                    href={data?.html_url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-center whitespace-nowrap"
                                >
                                    View on GitHub
                                </a>
                            </div>

                            {/* Stats Grid */}
                            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center border border-blue-200">
                                    <div className="text-4xl font-bold text-blue-600 mb-2">
                                        {data?.followers || 0}
                                    </div>
                                    <div className="text-sm text-gray-700 font-semibold">Followers</div>
                                </div>
                                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center border border-purple-200">
                                    <div className="text-4xl font-bold text-purple-600 mb-2">
                                        {data?.following || 0}
                                    </div>
                                    <div className="text-sm text-gray-700 font-semibold">Following</div>
                                </div>
                                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 text-center border border-pink-200">
                                    <div className="text-4xl font-bold text-pink-600 mb-2">
                                        {data?.public_repos || 0}
                                    </div>
                                    <div className="text-sm text-gray-700 font-semibold">Repositories</div>
                                </div>
                                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center border border-green-200">
                                    <div className="text-4xl font-bold text-green-600 mb-2">
                                        {data?.public_gists || 0}
                                    </div>
                                    <div className="text-sm text-gray-700 font-semibold">Gists</div>
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Profile Details</h3>
                                    
                                    {data?.company && (
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                            <span>{data.company}</span>
                                        </div>
                                    )}
                                    
                                    {data?.blog && (
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                            </svg>
                                            <a href={data.blog} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                                {data.blog}
                                            </a>
                                        </div>
                                    )}
                                    
                                    {data?.twitter_username && (
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                            </svg>
                                            <a href={`https://twitter.com/${data.twitter_username}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                                @{data.twitter_username}
                                            </a>
                                        </div>
                                    )}
                                    
                                    {data?.email && (
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <span>{data.email}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Account Info</h3>
                                    
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span>Joined {new Date(data?.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </svg>
                                        <span>Updated {new Date(data?.updated_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                        <span>Account Type: {data?.type}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* API Info Banner */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                    <div className="flex items-center justify-center gap-2 text-blue-700">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-semibold">
                            This data is fetched live from the GitHub API using React Router loaders
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Github

export const githubinfo = async () => {
    const response = await fetch('https://api.github.com/users/umerazizgujjar')
    return response.json()
}

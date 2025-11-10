import React from 'react'

export default function About() {
    return (
        <div className="bg-gradient-to-b from-gray-50 to-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                        About <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Project</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Building the future of web development with React Router and modern design principles
                    </p>
                </div>

                {/* Main Content Section */}
                <div className="space-y-16">
                    {/* First Block */}
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <img
                                src="https://illustrations.popsy.co/amber/product-launch.svg"
                                alt="Product Launch"
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                        <div className="lg:w-1/2 space-y-6">
                            <h2 className="text-4xl font-bold text-gray-900">
                                Built by Passionate Developers
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our React Router demo showcases modern web development practices with cutting-edge technologies. 
                                We focus on creating beautiful, performant, and user-friendly applications that scale.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Every component is crafted with attention to detail, ensuring a seamless experience 
                                across all devices and browsers. We believe in clean code, beautiful design, and exceptional user experience.
                            </p>
                            <div className="flex gap-4 pt-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="font-semibold text-gray-700">Modern Stack</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="font-semibold text-gray-700">Best Practices</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Block - Reversed */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                        <div className="lg:w-1/2">
                            <img
                                src="https://illustrations.popsy.co/amber/team-spirit.svg"
                                alt="Team Spirit"
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                        <div className="lg:w-1/2 space-y-6">
                            <h2 className="text-4xl font-bold text-gray-900">
                                Our Mission & Vision
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We aim to inspire developers to build better applications by demonstrating the power of React Router 
                                combined with modern UI/UX design principles. Our goal is to make web development more accessible 
                                and enjoyable for everyone.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Through continuous innovation and community feedback, we strive to create resources that help 
                                developers at all levels build amazing web applications that users love.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-20 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
                        <div className="space-y-2">
                            <div className="text-5xl font-bold">100+</div>
                            <div className="text-blue-100 text-lg">Components</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-5xl font-bold">50K+</div>
                            <div className="text-blue-100 text-lg">Developers</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-5xl font-bold">99%</div>
                            <div className="text-blue-100 text-lg">Satisfaction</div>
                        </div>
                    </div>
                </div>

                {/* Technologies Section */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Technologies We Use
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { name: 'React', icon: '⚛️' },
                            { name: 'React Router', icon: '🔀' },
                            { name: 'Tailwind CSS', icon: '🎨' },
                            { name: 'Vite', icon: '⚡' },
                        ].map((tech) => (
                            <div key={tech.name} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="text-5xl mb-3">{tech.icon}</div>
                                <div className="text-lg font-semibold text-gray-900">{tech.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

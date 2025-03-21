import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-gray-800 shadow-lg">
        <h2 className="text-2xl font-bold">Martial Art System</h2>
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-red-500">Home</a></li>
            <li><a href="#" className="hover:text-red-500">About</a></li>
            <li><a href="#" className="hover:text-red-500">Contact</a></li>
            <li><a href="#" className="hover:text-red-500">AI Advisor</a></li>
          </ul>
          <div className="flex space-x-4">
            <button className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white">Sign In</button>
            <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700">Sign Up</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Martial Art Management System</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Empowering martial arts academies with AI-driven fitness recommendations.
        </p>
        <button className="mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700">
          Get Started
        </button>
      </header>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-gray-800 rounded-lg text-center shadow-lg">
          <h3 className="text-xl font-semibold">Student Management</h3>
          <p className="mt-2 text-gray-400">Track student progress and attendance easily.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg text-center shadow-lg">
          <h3 className="text-xl font-semibold">AI Fitness Advisor</h3>
          <p className="mt-2 text-gray-400">Personalized fitness recommendations using AI.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg text-center shadow-lg">
          <h3 className="text-xl font-semibold">Academy Management</h3>
          <p className="mt-2 text-gray-400">Manage multiple academies from a single platform.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400">
        &copy; 2025 Martial Art Management System. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;


import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
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

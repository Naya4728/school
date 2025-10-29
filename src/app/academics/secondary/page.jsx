"use client";

import React from "react";

const SecondaryPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Secondary School Program
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Preparing students for higher education and leadership with a strong
          focus on academics, critical thinking, and personal growth.
        </p>
      </div>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          About Our Secondary School
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Our secondary school nurtures students' talents and equips them with
          the knowledge and skills for academic success and personal
          development. We focus on preparing young adults for future challenges
          and leadership roles.
        </p>

        {/* Images Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Science Lab */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="https://images.pexels.com/photos/8033972/pexels-photo-8033972.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Science Lab"
              className="w-full h-60 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold">Advanced Science Labs</h3>
              <p className="text-gray-600 text-sm mt-2">
                Fully equipped labs for Physics, Chemistry, and Biology to support hands-on learning.
              </p>
            </div>
          </div>

          {/* Sports */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="https://images.pexels.com/photos/8033972/pexels-photo-8033972.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Sports and Athletics"
              className="w-full h-60 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold">Sports & Athletics</h3>
              <p className="text-gray-600 text-sm mt-2">
                Athletics, team sports, and fitness programs promote physical health and teamwork.
              </p>
            </div>
          </div>

          {/* Arts & Music */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="https://images.pexels.com/photos/8033972/pexels-photo-8033972.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Arts and Music"
              className="w-full h-60 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold">Arts & Music</h3>
              <p className="text-gray-600 text-sm mt-2">
                Visual arts, drama, and music programs encourage self-expression and creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Curriculum Overview
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 list-disc list-inside text-gray-700">
            <li>Mathematics, Physics, Chemistry, and Biology</li>
            <li>English Language and Literature</li>
            <li>Information and Communication Technology (ICT)</li>
            <li>History, Geography, and Social Studies</li>
            <li>Physical Education and Sports</li>
            <li>Music, Visual Arts, and Drama</li>
            <li>Extracurricular Clubs and Leadership Programs</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SecondaryPage;

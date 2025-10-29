"use client";

import React from "react";

const SixthFormPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Sixth Form Program
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Preparing students for university and career success with advanced academics, research, and leadership opportunities.
        </p>
      </div>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          About Our Sixth Form
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          The Sixth Form program is designed to develop independent learners who excel in academics, leadership, and personal development. Students engage in rigorous coursework and enrichment activities to prepare for higher education and future careers.
        </p>

        {/* Images Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Classroom / Study */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="https://images.pexels.com/photos/8033972/pexels-photo-8033972.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Independent Study"
              className="w-full h-60 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold">Independent Study</h3>
              <p className="text-gray-600 text-sm mt-2">
                Students are encouraged to take responsibility for their learning with support from experienced educators.
              </p>
            </div>
          </div>

          {/* Sports & Extracurricular */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="https://images.pexels.com/photos/8033972/pexels-photo-8033972.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Sports and Extracurricular"
              className="w-full h-60 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold">Sports & Extracurricular</h3>
              <p className="text-gray-600 text-sm mt-2">
                Participation in sports, clubs, and competitions enhances teamwork, leadership, and personal growth.
              </p>
            </div>
          </div>

          {/* Leadership & Mentorship */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="https://images.pexels.com/photos/8033972/pexels-photo-8033972.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Leadership & Mentorship"
              className="w-full h-60 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold">Leadership & Mentorship</h3>
              <p className="text-gray-600 text-sm mt-2">
                Sixth Form students develop leadership skills through mentoring, student government, and community service.
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
            <li>Advanced Mathematics, Physics, Chemistry, and Biology</li>
            <li>English Language and Literature</li>
            <li>Information and Communication Technology (ICT)</li>
            <li>History, Geography, and Social Sciences</li>
            <li>Physical Education, Sports & Wellness</li>
            <li>Leadership, Mentorship, and Community Service</li>
            <li>Extracurricular Clubs and University Preparation</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SixthFormPage;

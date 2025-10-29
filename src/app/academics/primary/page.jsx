"use client";

import React from "react";

export default function PrimaryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Primary School Program
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Building a strong foundation in academics, creativity, and character
          for young learners.
        </p>
      </div>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          About Our Primary School
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Our primary school provides a nurturing environment where children are
          encouraged to explore, discover, and grow academically and socially.
          With a curriculum designed to balance academics, arts, and physical
          development, we aim to prepare our pupils for lifelong learning.
        </p>

        {/* Images Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Classroom */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
              alt="Classroom Learning"
              className="w-full h-60 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold">Engaging Classrooms</h3>
              <p className="text-gray-600 text-sm mt-2">
                Modern classrooms designed for creativity, critical thinking,
                and collaboration.
              </p>
            </div>
          </div>

          {/* Sports & Activities */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="https://images.pexels.com/photos/8033972/pexels-photo-8033972.jpeg"
              alt="Sports and Play"
              className="w-full h-60 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold">Sports & Activities</h3>
              <p className="text-gray-600 text-sm mt-2">
                Physical education and play are integral to our holistic
                approach to development.
              </p>
            </div>
          </div>

          {/* Creative Arts */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1502082553048-f009c37129b9"
              alt="Creative Arts"
              className="w-full h-60 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold">Creative Arts</h3>
              <p className="text-gray-600 text-sm mt-2">
                Music, art, and drama classes encourage students to express
                themselves creatively.
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
            <li>Mathematics, Science, and Language Arts</li>
            <li>Social Studies and Moral Instruction</li>
            <li>Information and Communication Technology (ICT)</li>
            <li>Music, Visual Arts, and Drama</li>
            <li>Physical Education and Sports</li>
            <li>Clubs and Extracurricular Activities</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle, Send } from "lucide-react"; // Works if lucide-react is installed

export default function ApplyNowPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", program: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2">
        {/* Left - Image */}
        <div className="relative hidden md:block">
          {/* Use a local image inside your /public folder */}
          <Image
            src="/students.jpg"
            alt="Students studying"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-800 bg-opacity-40 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold text-center px-4">
              Begin Your Journey with Us
            </h2>
          </div>
        </div>

        {/* Right - Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          {!submitted ? (
            <>
              <h1 className="text-3xl font-bold text-blue-800 mb-4">
                Apply Now
              </h1>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our admissions team will reach out
                to you soon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Program of Interest
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="">Select a program</option>
                    <option value="primary">Primary School</option>
                    <option value="secondary">Secondary School</option>
                    <option value="sixth-form">Sixth Form</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Write a short message..."
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 flex items-center justify-center gap-2"
                >
                  <Send size={18} /> Submit Application
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <CheckCircle
                size={60}
                className="text-green-500 mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold text-blue-800">
                Application Submitted!
              </h2>
              <p className="text-gray-600 mt-2">
                Thank you for applying. Our admissions team will contact you
                shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800"
              >
                Apply Another
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

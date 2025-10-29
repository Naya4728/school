"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* HEADER */}
      <section className="bg-indigo-900 text-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Contact Our School
        </motion.h1>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
          Have questions, suggestions, or need assistance? Reach out to us — we’re here to help!
        </p>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="py-16 px-6 md:px-16 lg:px-24 grid md:grid-cols-2 gap-12">
        {/* LEFT - CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-indigo-900 mb-6">
            📍 Get In Touch
          </h2>
          <p className="text-gray-700 mb-6">
            We value communication between parents, students, and staff. Feel free to contact us for any inquiries or feedback.
          </p>

          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-gray-800">🏫 School Address</h3>
              <p className="text-gray-600">123 Learning Avenue, EduTown, Lagos, Nigeria</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">📞 Phone</h3>
              <p className="text-gray-600">+234 812 345 6789</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">✉️ Email</h3>
              <p className="text-gray-600">info@greenspringschool.edu.ng</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">🕓 Office Hours</h3>
              <p className="text-gray-600">Mon - Fri: 8:00am - 4:00pm</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT - FORM */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8"
          onSubmit={(e) => {
            e.preventDefault();
            alert("✅ Message sent successfully!");
          }}
        >
          <h2 className="text-2xl font-bold text-indigo-900 mb-6">
            📬 Send Us a Message
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-2">Full Name</label>
              <input
                type="text"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block font-semibold mb-2">Subject</label>
            <input
              type="text"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mt-4">
            <label className="block font-semibold mb-2">Message</label>
            <textarea
              rows="5"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-indigo-900 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </section>

      {/* MAP SECTION */}
      <section className="mt-10">
        <iframe
          className="w-full h-80 border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.811565431827!2d3.379205014773507!3d6.451851725941785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5107e9b08d9%3A0x84c156e66ff1a944!2sLagos%20Island%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1709652015803!5m2!1sen!2sng"
        ></iframe>
      </section>
    </div>
  );
}

"use client";
import React from "react";
import { FileDown, Mail, Phone, CheckCircle, UserPlus } from "lucide-react";
import Link from "next/link";

export default function AdmissionsPage() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-indigo-800/70"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Admissions at Greenfield Academy
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Nurturing excellence, character, and creativity — one student at a time.
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">
          Admission Process
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <UserPlus className="w-12 h-12 text-indigo-600" />,
              title: "Step 1: Apply Online",
              desc: "Complete our simple online application form to express interest in enrolling your child.",
            },
            {
              icon: <CheckCircle className="w-12 h-12 text-indigo-600" />,
              title: "Step 2: Assessment",
              desc: "Applicants will be invited for an entrance test and interview to evaluate readiness.",
            },
            {
              icon: <FileDown className="w-12 h-12 text-indigo-600" />,
              title: "Step 3: Admission Offer",
              desc: "Successful candidates will receive an admission letter and payment instructions.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-indigo-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
            Admission Requirements
          </h2>
          <ul className="space-y-4 max-w-3xl mx-auto text-gray-700">
            <li>📄 Completed online or printed application form</li>
            <li>🧾 Birth certificate or age declaration</li>
            <li>🏫 Last school report or transcript</li>
            <li>🪪 Two passport-sized photographs</li>
            <li>💬 Recommendation letter from current school (if applicable)</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-indigo-700 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Join Greenfield Academy?
        </h2>
        <p className="text-lg mb-8 text-indigo-100 max-w-2xl mx-auto">
          Begin your child’s journey toward excellence today. Our admissions
          team is ready to guide you every step of the way.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/admissions/apply"
            className="bg-yellow-400 hover:bg-yellow-300 text-indigo-800 font-semibold px-6 py-3 rounded-lg shadow-md transition"
          >
            Apply Now
          </Link>
          <a
            href="/downloads/prospectus.pdf"
            className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition flex items-center gap-2"
          >
            <FileDown size={20} /> Download Prospectus
          </a>
        </div>
      </section>

      {/* Contact for Inquiries */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6">
          Need More Information?
        </h2>
        <p className="text-gray-600 mb-8">
          Our admissions office is happy to assist you with any questions about
          enrollment, fees, or requirements.
        </p>
        <div className="flex justify-center gap-8 flex-wrap text-indigo-700 font-medium">
          <p className="flex items-center gap-2">
            <Phone size={18} /> +234 800 123 4567
          </p>
          <p className="flex items-center gap-2">
            <Mail size={18} /> admissions@greenfieldacademy.edu.ng
          </p>
        </div>
      </section>
    </main>
  );
}

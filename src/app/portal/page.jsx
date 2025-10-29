"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Users, CreditCard, Award, CalendarDays, MessageSquare } from "lucide-react";

export default function SchoolPortal() {
  const features = [
    {
      id: 1,
      title: "Student Records",
      description: "Access academic details, personal data, and attendance history.",
      icon: <Users className="w-8 h-8 text-indigo-700" />,
      href: "/students",
    },
    {
      id: 2,
      title: "Grades & Reports",
      description: "View subject performance, report cards, and class rankings.",
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      href: "/dashboard/grades",
    },
    {
      id: 3,
      title: "Payments & Fees",
      description: "Track tuition fees, make payments, and download receipts easily.",
      icon: <CreditCard className="w-8 h-8 text-green-600" />,
      href: "/dashboard/payments",
    },
    {
      id: 4,
      title: "Class Timetable",
      description: "Stay updated with your weekly class schedule and upcoming exams.",
      icon: <CalendarDays className="w-8 h-8 text-blue-600" />,
      href: "/dashboard/timetable",
    },
    {
      id: 5,
      title: "E-Library",
      description: "Explore digital textbooks, articles, and learning resources.",
      icon: <BookOpen className="w-8 h-8 text-purple-700" />,
      href: "/dashboard/library",
    },
    {
      id: 6,
      title: "Messages & Notices",
      description: "Get updates from teachers, staff, and school announcements.",
      icon: <MessageSquare className="w-8 h-8 text-red-600" />,
      href: "/dashboard/messages",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* HEADER */}
      <section className="bg-indigo-900 text-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold"
        >
          Greenfield School Portal
        </motion.h1>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
          A unified platform for students, teachers, and parents — manage academics, track progress, and stay informed.
        </p>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl p-8 border border-gray-100 text-center hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Link
                href={feature.href}
                className="inline-block px-5 py-2 bg-indigo-900 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
              >
                Open
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-yellow-400 text-indigo-900 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Need Help Logging In?
        </motion.h2>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Contact the IT department or school administrator for login or password assistance.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block px-8 py-3 bg-indigo-900 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Contact Support
        </Link>
      </section>
    </div>
  );
}

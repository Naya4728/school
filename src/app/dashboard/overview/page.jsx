"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, DollarSign, Award } from "lucide-react";

export default function DashboardOverview() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pt-24 px-6 md:px-12">
      {/* 🏫 Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <h1 className="text-4xl font-bold text-indigo-900">School Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">
          Track key insights about your students, classes, and performance.
        </p>
      </motion.div>

      {/* 📊 Statistics Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <StatCard
          title="Total Students"
          value="1,245"
          icon={<Users className="w-8 h-8 text-indigo-500" />}
          color="bg-indigo-100"
        />
        <StatCard
          title="Total Teachers"
          value="58"
          icon={<BookOpen className="w-8 h-8 text-green-500" />}
          color="bg-green-100"
        />
        <StatCard
          title="Classes"
          value="36"
          icon={<Award className="w-8 h-8 text-yellow-500" />}
          color="bg-yellow-100"
        />
        <StatCard
          title="Fees Collected"
          value="₦12.4M"
          icon={<DollarSign className="w-8 h-8 text-purple-500" />}
          color="bg-purple-100"
        />
      </motion.div>

      {/* 📈 Performance Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Student Performance */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">
            Academic Performance
          </h2>
          <p className="text-gray-600 mb-4">
            Average student grades across all classes this term.
          </p>
          <div className="flex items-end justify-between h-40">
            {[
              { label: "Math", value: 85 },
              { label: "Science", value: 90 },
              { label: "English", value: 78 },
              { label: "Art", value: 88 },
              { label: "ICT", value: 92 },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className="w-10 bg-indigo-500 rounded-t-lg"
                  style={{ height: `${item.value}%` }}
                />
                <p className="mt-2 text-sm text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Insights */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">
            Payment Overview
          </h2>
          <p className="text-gray-600 mb-6">
            Breakdown of payment status among enrolled students.
          </p>

          <div className="space-y-4">
            {[
              { label: "Paid in Full", value: 68, color: "bg-green-500" },
              { label: "Partially Paid", value: 22, color: "bg-yellow-500" },
              { label: "Pending", value: 10, color: "bg-red-500" },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1 text-gray-700">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${item.color} h-2 rounded-full`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 👩‍🏫 Footer Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-center mt-16 text-gray-500 text-sm"
      >
        © {new Date().getFullYear()} Greenfield Academy Dashboard • Built with 💙 by Your Dev Team
      </motion.div>
    </div>
  );
}

/* 🔹 Reusable Stat Card Component */
function StatCard({ title, value, icon, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`p-6 rounded-2xl shadow-md border border-gray-100 bg-white hover:shadow-lg transition-all duration-200`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
          <p className="text-3xl font-bold text-indigo-900 mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-xl ${color}`}>{icon}</div>
      </div>
    </motion.div>
  );
}

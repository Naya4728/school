"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, User, CheckCircle, XCircle, Mail, X } from "lucide-react";
import { useState } from "react";

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);

  // 🧠 Example student data
  const students = [
    {
      id: 1,
      name: "Aisha Bello",
      class: "JSS 1A",
      grade: "A",
      gradePercent: 92,
      feesPaid: true,
      contact: "aisha.bello@example.com",
      photo:
        "https://randomuser.me/api/portraits/women/75.jpg",
    },
    {
      id: 2,
      name: "David Johnson",
      class: "SS 2B",
      grade: "B+",
      gradePercent: 84,
      feesPaid: false,
      contact: "david.johnson@example.com",
      photo:
        "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      id: 3,
      name: "Chiamaka Okafor",
      class: "SS 3A",
      grade: "A+",
      gradePercent: 96,
      feesPaid: true,
      contact: "chiamaka.okafor@example.com",
      photo:
        "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 4,
      name: "Tunde Adeyemi",
      class: "JSS 2C",
      grade: "B",
      gradePercent: 78,
      feesPaid: false,
      contact: "tunde.adeyemi@example.com",
      photo:
        "https://randomuser.me/api/portraits/men/50.jpg",
    },
  ];

  // 🔍 Filter students
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.class.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pt-24 px-6 md:px-12">
      {/* 🧾 Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h1 className="text-4xl font-bold text-indigo-900">Student Records</h1>
        <p className="text-gray-600 mt-2">
          Manage student information, grades, and payment status.
        </p>
      </motion.div>

      {/* 🔍 Search Bar */}
      <div className="mb-6 flex items-center justify-center">
        <div className="flex items-center bg-white shadow-sm rounded-xl border px-4 py-2 w-full md:w-1/2">
          <Search className="text-gray-400 mr-3 w-5 h-5" />
          <input
            type="text"
            placeholder="Search student by name or class..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent focus:outline-none text-gray-700"
          />
        </div>
      </div>

      {/* 🧍 Student Table */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="overflow-x-auto bg-white shadow-md rounded-2xl border border-gray-100"
      >
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="bg-indigo-100 text-indigo-800">
              <th className="py-3 px-6 text-sm font-semibold">Name</th>
              <th className="py-3 px-6 text-sm font-semibold">Class</th>
              <th className="py-3 px-6 text-sm font-semibold">Grade</th>
              <th className="py-3 px-6 text-sm font-semibold">Fees Status</th>
              <th className="py-3 px-6 text-sm font-semibold">Contact</th>
              <th className="py-3 px-6 text-sm font-semibold text-right">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student, index) => (
                <motion.tr
                  key={student.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b hover:bg-indigo-50 transition"
                >
                  <td className="py-4 px-6 flex items-center gap-3">
                    <User className="w-5 h-5 text-indigo-500" />
                    <span className="font-medium">{student.name}</span>
                  </td>
                  <td className="py-4 px-6">{student.class}</td>
                  <td className="py-4 px-6 font-semibold text-indigo-700">
                    {student.grade}
                  </td>
                  <td className="py-4 px-6">
                    {student.feesPaid ? (
                      <span className="flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-1" /> Paid
                      </span>
                    ) : (
                      <span className="flex items-center text-red-600">
                        <XCircle className="w-4 h-4 mr-1" /> Pending
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-700">
                    {student.contact}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => setSelectedStudent(student)}
                      className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg shadow"
                    >
                      View Profile
                    </button>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-6 text-center text-gray-500">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </motion.div>

      {/* 🧑‍🎓 PROFILE MODAL */}
      <AnimatePresence>
        {selectedStudent && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl w-[90%] md:w-[500px] p-6 relative"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* ❌ Close Button */}
              <button
                onClick={() => setSelectedStudent(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
              >
                <X className="w-5 h-5" />
              </button>

              {/* 🧑 Profile Info */}
              <div className="text-center">
                <img
                  src={selectedStudent.photo}
                  alt={selectedStudent.name}
                  className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-indigo-200 mb-3"
                />
                <h2 className="text-2xl font-bold text-indigo-900">
                  {selectedStudent.name}
                </h2>
                <p className="text-gray-600">{selectedStudent.class}</p>
              </div>

              {/* 📊 Details */}
              <div className="mt-5 space-y-3">
                <p className="flex justify-between text-gray-700">
                  <span>Grade:</span>
                  <span className="font-semibold text-indigo-700">
                    {selectedStudent.grade}
                  </span>
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-500 h-2 rounded-full"
                    style={{ width: `${selectedStudent.gradePercent}%` }}
                  />
                </div>

                <p className="flex justify-between text-gray-700">
                  <span>Fees Status:</span>
                  {selectedStudent.feesPaid ? (
                    <span className="text-green-600 font-semibold">Paid</span>
                  ) : (
                    <span className="text-red-600 font-semibold">Pending</span>
                  )}
                </p>

                <p className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-4 h-4 text-indigo-600" />
                  {selectedStudent.contact}
                </p>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setSelectedStudent(null)}
                  className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

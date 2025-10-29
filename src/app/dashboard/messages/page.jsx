"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, Award } from "lucide-react";

export default function GradesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedStudent, setExpandedStudent] = useState(null);

  const students = [
    {
      id: 1,
      name: "Aisha Bello",
      class: "JSS 1A",
      average: 90,
      subjects: [
        { name: "Mathematics", grade: "A" },
        { name: "English", grade: "A" },
        { name: "Basic Science", grade: "B+" },
        { name: "Social Studies", grade: "A" },
      ],
    },
    {
      id: 2,
      name: "David Johnson",
      class: "SS 2B",
      average: 76,
      subjects: [
        { name: "Mathematics", grade: "B" },
        { name: "English", grade: "B+" },
        { name: "Physics", grade: "A" },
        { name: "Chemistry", grade: "C+" },
      ],
    },
    {
      id: 3,
      name: "Chiamaka Okafor",
      class: "SS 3A",
      average: 95,
      subjects: [
        { name: "Mathematics", grade: "A+" },
        { name: "English", grade: "A" },
        { name: "Biology", grade: "A+" },
        { name: "Economics", grade: "A" },
      ],
    },
    {
      id: 4,
      name: "Tunde Adeyemi",
      class: "JSS 2C",
      average: 68,
      subjects: [
        { name: "Mathematics", grade: "B" },
        { name: "English", grade: "C" },
        { name: "Civic Education", grade: "B" },
        { name: "Basic Tech", grade: "C+" },
      ],
    },
  ];

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.class.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pt-24 px-6 md:px-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-indigo-900 flex justify-center items-center gap-2">
          <Award className="w-7 h-7 text-yellow-500" /> Student Grades
        </h1>
        <p className="text-gray-600 mt-2">
          View academic performance and subject grades for all students.
        </p>
      </motion.div>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
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

      {/* Grades Table */}
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
              <th className="py-3 px-6 text-sm font-semibold">Average (%)</th>
              <th className="py-3 px-6 text-sm font-semibold text-right">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student, i) => (
                <React.Fragment key={student.id}>
                  <motion.tr
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="border-b hover:bg-indigo-50 transition"
                  >
                    <td className="py-4 px-6 font-medium">{student.name}</td>
                    <td className="py-4 px-6">{student.class}</td>
                    <td
                      className={`py-4 px-6 font-semibold ${
                        student.average >= 85
                          ? "text-green-600"
                          : student.average >= 70
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {student.average}%
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() =>
                          setExpandedStudent(
                            expandedStudent === student.id ? null : student.id
                          )
                        }
                        className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                      >
                        View{" "}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            expandedStudent === student.id
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                        />
                      </button>
                    </td>
                  </motion.tr>

                  {/* Expandable Subject Details */}
                  <AnimatePresence>
                    {expandedStudent === student.id && (
                      <motion.tr
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-gray-50 border-b"
                      >
                        <td colSpan="4" className="p-6">
                          <div className="grid md:grid-cols-2 gap-4">
                            {student.subjects.map((subj, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-4 bg-white rounded-xl border shadow-sm flex justify-between items-center"
                              >
                                <span className="font-medium text-gray-800">
                                  {subj.name}
                                </span>
                                <span
                                  className={`font-semibold ${
                                    subj.grade.startsWith("A")
                                      ? "text-green-600"
                                      : subj.grade.startsWith("B")
                                      ? "text-yellow-600"
                                      : "text-red-600"
                                  }`}
                                >
                                  {subj.grade}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </td>
                      </motion.tr>
                    )}
                  </AnimatePresence>
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-6 text-center text-gray-500">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}

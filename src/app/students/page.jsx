"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, User } from "lucide-react";

export default function StudentRecordsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const students = [
    {
      id: 1,
      name: "Aisha Bello",
      class: "JSS 1A",
      age: 12,
      average: 88,
      contact: "08123456789",
      subjects: [
        { name: "Mathematics", grade: "A" },
        { name: "English", grade: "A-" },
        { name: "Science", grade: "B+" },
      ],
    },
    {
      id: 2,
      name: "David Johnson",
      class: "SS 2B",
      age: 16,
      average: 76,
      contact: "08098765432",
      subjects: [
        { name: "Mathematics", grade: "B" },
        { name: "English", grade: "B+" },
        { name: "Physics", grade: "B" },
      ],
    },
    {
      id: 3,
      name: "Chiamaka Okafor",
      class: "SS 3A",
      age: 17,
      average: 95,
      contact: "08134567890",
      subjects: [
        { name: "Mathematics", grade: "A+" },
        { name: "English", grade: "A" },
        { name: "Biology", grade: "A+" },
      ],
    },
  ];

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.class.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans px-6 md:px-12 py-12">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 flex justify-center items-center gap-2">
          <User className="w-7 h-7 text-indigo-600" /> Student Records
        </h1>
        <p className="mt-2 text-gray-600">
          View all student information, grades, and contact details.
        </p>
      </motion.div>

      {/* SEARCH BAR */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center bg-white shadow-sm rounded-xl border px-4 py-2 w-full md:w-1/2">
          <Search className="text-gray-400 mr-3 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name or class..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent focus:outline-none text-gray-700"
          />
        </div>
      </div>

      {/* STUDENT TABLE */}
      <div className="overflow-x-auto bg-white shadow-md rounded-2xl border border-gray-100">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="bg-indigo-100 text-indigo-800">
              <th className="py-3 px-6 text-sm font-semibold">Name</th>
              <th className="py-3 px-6 text-sm font-semibold">Class</th>
              <th className="py-3 px-6 text-sm font-semibold">Age</th>
              <th className="py-3 px-6 text-sm font-semibold">Average (%)</th>
              <th className="py-3 px-6 text-sm font-semibold text-center">
                Contact
              </th>
              <th className="py-3 px-6 text-sm font-semibold text-center">
                Subjects
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student, i) => (
                <tr
                  key={student.id}
                  className="border-b hover:bg-indigo-50 transition"
                >
                  <td className="py-4 px-6 font-medium">{student.name}</td>
                  <td className="py-4 px-6">{student.class}</td>
                  <td className="py-4 px-6">{student.age}</td>
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
                  <td className="py-4 px-6 text-center">{student.contact}</td>
                  <td className="py-4 px-6 text-center">
                    {student.subjects.map((subj) => (
                      <span
                        key={subj.name}
                        className="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded-full mr-1 mb-1"
                      >
                        {subj.name}: {subj.grade}
                      </span>
                    ))}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="py-6 text-center text-gray-500 text-lg"
                >
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

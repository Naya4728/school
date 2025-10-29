"use client";

import { motion } from "framer-motion";
import { Clock, CalendarDays } from "lucide-react";

export default function TimetablePage() {
  const timetable = [
    {
      day: "Monday",
      classes: [
        { subject: "Mathematics", time: "8:00 AM - 9:00 AM", teacher: "Mr. Adebayo", room: "101" },
        { subject: "English Language", time: "9:15 AM - 10:15 AM", teacher: "Mrs. Johnson", room: "102" },
        { subject: "Physics", time: "10:30 AM - 11:30 AM", teacher: "Mr. Thomas", room: "Lab 2" },
      ],
    },
    {
      day: "Tuesday",
      classes: [
        { subject: "Chemistry", time: "8:00 AM - 9:00 AM", teacher: "Dr. Musa", room: "Lab 1" },
        { subject: "Civic Education", time: "9:15 AM - 10:15 AM", teacher: "Mrs. Faith", room: "201" },
        { subject: "Computer Science", time: "10:30 AM - 11:30 AM", teacher: "Mr. David", room: "ICT 1" },
      ],
    },
    {
      day: "Wednesday",
      classes: [
        { subject: "Biology", time: "8:00 AM - 9:00 AM", teacher: "Mrs. Ade", room: "103" },
        { subject: "Economics", time: "9:15 AM - 10:15 AM", teacher: "Mr. Okon", room: "104" },
        { subject: "Physical Education", time: "10:30 AM - 11:30 AM", teacher: "Coach Fred", room: "Field" },
      ],
    },
    {
      day: "Thursday",
      classes: [
        { subject: "Geography", time: "8:00 AM - 9:00 AM", teacher: "Mr. Samuel", room: "105" },
        { subject: "Literature", time: "9:15 AM - 10:15 AM", teacher: "Mrs. Grace", room: "106" },
        { subject: "Technical Drawing", time: "10:30 AM - 11:30 AM", teacher: "Mr. James", room: "Workshop" },
      ],
    },
    {
      day: "Friday",
      classes: [
        { subject: "Further Mathematics", time: "8:00 AM - 9:00 AM", teacher: "Mr. Kelvin", room: "107" },
        { subject: "French", time: "9:15 AM - 10:15 AM", teacher: "Mme. Chika", room: "108" },
        { subject: "Music", time: "10:30 AM - 11:30 AM", teacher: "Mr. Adewale", room: "Music Hall" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* HEADER */}
      <section className="bg-indigo-900 text-white py-16 text-center shadow-md">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold"
        >
          Class Timetable
        </motion.h1>
        <p className="mt-3 text-gray-300 text-lg">View your weekly class schedule and plan your studies effectively.</p>
      </section>

      {/* TIMETABLE */}
      <section className="py-12 px-4 md:px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {timetable.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="bg-indigo-900 text-white rounded-t-2xl p-4 flex items-center justify-center gap-2">
                <CalendarDays className="w-5 h-5 text-yellow-300" />
                <h2 className="text-lg font-semibold">{day.day}</h2>
              </div>

              <div className="p-6 space-y-4">
                {day.classes.map((cls, i) => (
                  <div
                    key={`${day.day}-${i}`}
                    className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-indigo-50 transition-all"
                  >
                    <h3 className="text-indigo-900 font-bold text-lg">{cls.subject}</h3>
                    <div className="flex items-center text-gray-600 mt-1">
                      <Clock className="w-4 h-4 mr-2 text-indigo-600" />
                      {cls.time}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Teacher: <span className="font-medium">{cls.teacher}</span></p>
                    <p className="text-sm text-gray-600">Room: <span className="font-medium">{cls.room}</span></p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <section className="text-center py-10 text-gray-600">
        <p>© 2025 Greenfield School. All Rights Reserved.</p>
      </section>
    </div>
  );
}

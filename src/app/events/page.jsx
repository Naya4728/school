"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const events = [
    {
      id: 1,
      title: "Inter-House Sports Competition",
      date: "March 12, 2025",
      location: "School Field",
      image:
        "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1500&q=80",
      description:
        "A fun-filled day with various athletic activities to promote teamwork and school spirit.",
      fullDetails:
        "The Inter-House Sports Competition brings all houses together in friendly rivalry. Events include track and field races, football, tug of war, and more!",
    },
    {
      id: 2,
      title: "Science & Innovation Fair",
      date: "April 5, 2025",
      location: "School Auditorium",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1500&q=80",
      description:
        "Students showcase innovative projects and compete for the 'Young Innovator Award'.",
      fullDetails:
        "Students present projects in various science and tech fields, including robotics, chemistry, and environmental research.",
    },
    {
      id: 3,
      title: "Cultural Day Celebration",
      date: "May 20, 2025",
      location: "Main Hall",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1500&q=80",
      description:
        "A day to celebrate our rich cultural diversity through food, fashion, and performances.",
      fullDetails:
        "Experience cultural displays, traditional attire, food exhibitions, and dance performances celebrating our diversity.",
    },
  ];

  // Event proposal form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    eventTitle: "",
    eventDate: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🎉 Proposal Submitted: ${form.eventTitle}`);
    setForm({
      name: "",
      email: "",
      eventTitle: "",
      eventDate: "",
      description: "",
    });
    setShowForm(false);
  };

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
          School Events & Activities
        </motion.h1>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
          Stay updated with our latest events, competitions, and celebrations that shape our school community.
        </p>
      </section>

      {/* EVENT LIST or DETAILS */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        {!selectedEvent ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {events.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-indigo-900 mb-2">
                    {event.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-1">
                    📅 <strong>{event.date}</strong>
                  </p>
                  <p className="text-gray-600 text-sm mb-4">📍 {event.location}</p>
                  <p className="text-gray-700 mb-6">{event.description}</p>

                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="inline-block px-5 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-500 transition"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="text-indigo-600 mb-4 hover:underline"
            >
              ← Back to Events
            </button>
            <Image
              src={selectedEvent.image}
              alt={selectedEvent.title}
              width={800}
              height={400}
              className="rounded-lg mb-6"
            />
            <h2 className="text-3xl font-bold text-indigo-900 mb-2">
              {selectedEvent.title}
            </h2>
            <p className="text-gray-600 mb-1">
              📅 {selectedEvent.date} | 📍 {selectedEvent.location}
            </p>
            <p className="text-gray-700 mt-4">{selectedEvent.fullDetails}</p>
          </motion.div>
        )}
      </section>

      {/* EVENT PROPOSAL FORM */}
      <section className="bg-yellow-400 text-indigo-900 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Want to Host an Event?
        </motion.h2>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Teachers and students can submit event proposals or collaborate with our activities committee.
        </p>
        <button
          onClick={() => setShowForm(!showForm)}
          className="mt-8 inline-block px-8 py-3 bg-indigo-900 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          {showForm ? "Close Form" : "Submit Event Proposal"}
        </button>

        {showForm && (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg mx-auto mt-10 text-left bg-white p-8 rounded-xl shadow-lg"
          >
            <label className="block mb-3 font-semibold">Your Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full p-3 border rounded-lg mb-4"
            />

            <label className="block mb-3 font-semibold">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full p-3 border rounded-lg mb-4"
            />

            <label className="block mb-3 font-semibold">Event Title</label>
            <input
              type="text"
              value={form.eventTitle}
              onChange={(e) => setForm({ ...form, eventTitle: e.target.value })}
              required
              className="w-full p-3 border rounded-lg mb-4"
            />

            <label className="block mb-3 font-semibold">Proposed Date</label>
            <input
              type="date"
              value={form.eventDate}
              onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
              required
              className="w-full p-3 border rounded-lg mb-4"
            />

            <label className="block mb-3 font-semibold">Event Description</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows="4"
              required
              className="w-full p-3 border rounded-lg mb-4"
            />

            <button
              type="submit"
              className="w-full bg-indigo-900 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Submit Proposal
            </button>
          </motion.form>
        )}
      </section>
    </div>
  );
}

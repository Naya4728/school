"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans relative">
      <Navbar />

      {/* 🟣 HERO SECTION */}
      <section className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1500&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 via-indigo-800/70 to-indigo-900/80 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center text-white px-6 max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Welcome to{" "}
            <span className="text-yellow-400">Greenfield Academy</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-100">
            Nurturing bright minds for a brighter future.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/apply"
              className="px-6 py-3 bg-yellow-400 text-indigo-900 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Apply Now
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 bg-white/90 text-indigo-900 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 🧭 SCHOOL HIGHLIGHTS */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-indigo-900 mb-10">
          Why Choose Greenfield Academy?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Excellence in Education",
              desc: "Our curriculum balances academics, creativity, and innovation.",
              icon: "📚",
            },
            {
              title: "Holistic Development",
              desc: "We nurture leadership, discipline, and teamwork in every student.",
              icon: "🌱",
            },
            {
              title: "Global Recognition",
              desc: "Graduates excel in top universities and careers worldwide.",
              icon: "🌍",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-indigo-800">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🎓 OUR PROGRAMS */}
      <section className="py-20 bg-indigo-900 text-white px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Our Academic Programs</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Elementary School",
              desc: "Building a strong academic foundation with curiosity and care.",
              img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "High School",
              desc: "Encouraging independent thinking and leadership qualities.",
              img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "STEM Programs",
              desc: "Empowering future scientists, engineers, and innovators.",
              img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative h-56">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="100%"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
                <p className="text-gray-200">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 💬 TESTIMONIALS */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-indigo-900 mb-12">
          What Parents & Students Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              quote:
                "Greenfield has completely transformed how my son learns. He’s more confident and excited every day!",
              name: "Mrs. Johnson",
            },
            {
              quote:
                "The teachers here truly care. I’ve learned to think critically and aim higher.",
              name: "Samuel, Class of 2025",
            },
            {
              quote:
                "A perfect blend of academics, arts, and values. Best decision we ever made.",
              name: "Mr. & Mrs. Adeyemi",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <p className="italic text-gray-700 mb-4">“{t.quote}”</p>
              <h4 className="font-semibold text-indigo-800">— {t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🚀 CALL TO ACTION */}
      <section className="py-20 bg-yellow-400 text-indigo-900 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Join Greenfield?</h2>
        <p className="text-lg mb-8">
          Begin your journey with a school that believes in your potential.
        </p>
        <Link
          href="/apply"
          className="px-8 py-4 bg-indigo-900 text-white font-semibold rounded-lg hover:bg-indigo-800 transition"
        >
          Apply for Admission
        </Link>
      </section>

      {/* ⚫ FOOTER */}
      <footer className="py-8 bg-indigo-950 text-gray-400 text-center">
        <p>© {new Date().getFullYear()} Greenfield Academy. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const academicsRef = useRef(null);
  const dashboardRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        (academicsRef.current && !academicsRef.current.contains(e.target)) &&
        (dashboardRef.current && !dashboardRef.current.contains(e.target))
      ) {
        setAcademicsOpen(false);
        setDashboardOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold text-yellow-400">
          Greenfield Academy
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex space-x-8 text-white font-medium items-center">
          <NavItem href="/" label="Home" />
          <NavItem href="/about" label="About" />

          {/* 🧩 Academics Dropdown */}
          <div
            ref={academicsRef}
            className="relative"
            onMouseEnter={() => setAcademicsOpen(true)}
            onMouseLeave={() => setAcademicsOpen(false)}
          >
            <button
              onClick={() => setAcademicsOpen((v) => !v)}
              className="flex items-center gap-1 hover:text-yellow-400 transition"
            >
              Academics
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  academicsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {academicsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-3 w-48 bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden z-50"
                >
                  <DropdownLink href="/academics/primary" text="Primary School" />
                  <DropdownLink href="/academics/secondary" text="Secondary School" />
                  <DropdownLink href="/academics/sixth-form" text="Sixth Form" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 🧭 Dashboard Dropdown */}
          <div
            ref={dashboardRef}
            className="relative"
            onMouseEnter={() => setDashboardOpen(true)}
            onMouseLeave={() => setDashboardOpen(false)}
          >
            <button
              onClick={() => setDashboardOpen((v) => !v)}
              className="flex items-center gap-1 hover:text-yellow-400 transition"
            >
              Dashboard
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  dashboardOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {dashboardOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-3 w-52 bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden z-50"
                >
                  <DropdownLink href="/dashboard/overview" text="Overview" />
                  <DropdownLink href="/dashboard/students" text="Students" />
                  <DropdownLink href="/dashboard/payments" text="Payments" />
                  <DropdownLink href="/dashboard/grades" text="Grades" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavItem href="/admissions" label="Admissions" />
          <NavItem href="/events" label="Events" />
          <NavItem href="/contact" label="Contact" />
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex space-x-3">
          <Link
            href="/apply"
            className="px-4 py-2 bg-yellow-400 text-indigo-900 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Apply Now
          </Link>
          <Link
            href="/portal"
            className="px-4 py-2 bg-white/80 text-indigo-900 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Portal
          </Link>
        </div>

        {/* 📱 Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-indigo-900/95 backdrop-blur-md text-white p-6 space-y-4"
          >
            <MobileLink href="/" text="Home" />
            <MobileLink href="/about" text="About" />

            <details className="group">
              <summary className="cursor-pointer flex justify-between items-center text-lg hover:text-yellow-400">
                Academics
                <ChevronDown className="group-open:rotate-180 transition-transform" size={16} />
              </summary>
              <div className="pl-4 mt-2 space-y-2 text-sm">
                <MobileLink href="/academics/primary" text="Primary" />
                <MobileLink href="/academics/secondary" text="Secondary" />
                <MobileLink href="/academics/sixth-form" text="Sixth Form" />
              </div>
            </details>

            <details className="group">
              <summary className="cursor-pointer flex justify-between items-center text-lg hover:text-yellow-400">
                Dashboard
                <ChevronDown className="group-open:rotate-180 transition-transform" size={16} />
              </summary>
              <div className="pl-4 mt-2 space-y-2 text-sm">
                <MobileLink href="/dashboard/overview" text="Overview" />
                <MobileLink href="/dashboard/students" text="Students" />
                <MobileLink href="/dashboard/payments" text="Payments" />
                <MobileLink href="/dashboard/grades" text="Grades" />
              </div>
            </details>

            <MobileLink href="/admissions" text="Admissions" />
            <MobileLink href="/events" text="Events" />
            <MobileLink href="/contact" text="Contact" />

            <div className="pt-4 space-y-2">
              <Link
                href="/apply"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center bg-yellow-400 text-indigo-900 py-2 rounded-lg font-semibold hover:bg-yellow-300"
              >
                Apply Now
              </Link>
              <Link
                href="/portal"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center bg-white/90 text-indigo-900 py-2 rounded-lg font-semibold hover:bg-gray-100"
              >
                Portal
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* 🔹 Subcomponents */
function NavItem({ href, label }) {
  return (
    <Link href={href} className="hover:text-yellow-400 transition">
      {label}
    </Link>
  );
}

function DropdownLink({ href, text }) {
  return (
    <Link
      href={href}
      className="block px-5 py-3 hover:bg-indigo-50 transition border-b border-gray-100 last:border-none"
    >
      {text}
    </Link>
  );
}

function MobileLink({ href, text }) {
  return (
    <Link
      href={href}
      className="block text-lg hover:text-yellow-400 transition"
    >
      {text}
    </Link>
  );
}

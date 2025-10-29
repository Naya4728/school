"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Search, Download } from "lucide-react";
import Image from "next/image";

export default function ELibraryPage() {
  const [search, setSearch] = useState("");

  const books = [
    {
      id: 1,
      title: "Physics for Senior Secondary Schools",
      author: "Dr. Musa Ahmed",
      subject: "Physics",
      cover:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
      file: "/books/physics.pdf",
    },
    {
      id: 2,
      title: "Essential Mathematics Vol. 2",
      author: "A. J. Omolewa",
      subject: "Mathematics",
      cover:
        "https://images.unsplash.com/photo-1553729784-e91953dec042?auto=format&fit=crop&w=600&q=80",
      file: "/books/maths.pdf",
    },
   {
  id: 3,
  title: "Modern Biology",
  author: "Dr. Uche N. Eze",
  subject: "Biology",
  cover:
   "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
  file: "/books/biology.pdf",
},

    {
      id: 4,
      title: "History of West Africa",
      author: "Prof. Okon Asuquo",
      subject: "History",
      cover:
        "https://images.unsplash.com/photo-1529148482759-b35b25c5f217?auto=format&fit=crop&w=600&q=80",
      file: "/books/history.pdf",
    },
  {
      id: 5,
      title: "Introduction to Computer Science",
      author: "Engr. David Johnson",
      subject: "Computer Science",
      cover:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      file: "/books/computer.pdf",
    },
  ];

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()) ||
      book.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* HEADER */}
      <section className="bg-indigo-900 text-white py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          📚 School e-Library
        </motion.h1>
        <p className="mt-3 text-gray-200 text-lg max-w-2xl mx-auto">
          Access and download study materials, textbooks, and research resources anytime, anywhere.
        </p>
      </section>

      {/* SEARCH BAR */}
      <section className="py-8 px-6 md:px-16 lg:px-24 flex justify-center">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search by title, author, or subject..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full py-3 pl-10 pr-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>
      </section>

      {/* BOOKS GRID */}
      <section className="px-6 md:px-16 lg:px-24 pb-16">
        {filteredBooks.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {filteredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden border border-gray-100"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-indigo-900 text-lg mb-1">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-600">by {book.author}</p>
                  <p className="text-sm text-gray-500 mt-1 italic">
                    Subject: {book.subject}
                  </p>

                  <a
                    href={book.file}
                    download
                    className="mt-4 inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition text-sm font-medium"
                  >
                    <Download size={16} /> Download
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg mt-10">
            No books found. Try searching for something else.
          </p>
        )}
      </section>

      {/* FOOTER */}
      <section className="text-center py-8 text-gray-600 bg-gray-100">
        <BookOpen className="inline-block w-5 h-5 text-indigo-600 mr-2" />
        <span>© 2025 Greenfield School e-Library</span>
      </section>
    </div>
  );
}

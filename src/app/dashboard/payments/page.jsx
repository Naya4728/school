"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  CreditCard,
  CheckCircle,
  XCircle,
  Search,
  X,
  Receipt,
} from "lucide-react";

export default function PaymentPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showPayModal, setShowPayModal] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);

  const payments = [
    {
      id: 1,
      studentName: "Aisha Bello",
      class: "JSS 1A",
      amount: 45000,
      paid: true,
      date: "2025-09-15",
      method: "Bank Transfer",
      reference: "TXN-00123",
    },
    {
      id: 2,
      studentName: "David Johnson",
      class: "SS 2B",
      amount: 50000,
      paid: false,
      date: "-",
      method: "-",
      reference: "-",
    },
    {
      id: 3,
      studentName: "Chiamaka Okafor",
      class: "SS 3A",
      amount: 60000,
      paid: true,
      date: "2025-09-10",
      method: "Card Payment",
      reference: "TXN-00981",
    },
    {
      id: 4,
      studentName: "Tunde Adeyemi",
      class: "JSS 2C",
      amount: 42000,
      paid: false,
      date: "-",
      method: "-",
      reference: "-",
    },
  ];

  const filteredPayments = payments.filter(
    (p) =>
      p.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.class.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle Pay Now click
  const handlePayNow = (payment) => {
    setSelectedPayment(payment);
    setShowPayModal(true);
  };

  // Handle View Receipt click
  const handleViewReceipt = (payment) => {
    setSelectedPayment(payment);
    setShowReceipt(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pt-24 px-6 md:px-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-indigo-900">Payment Records</h1>
        <p className="text-gray-600 mt-2">
          View, manage, and process student payments securely.
        </p>
      </motion.div>

      {/* Search bar */}
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

      {/* Payment Table */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="overflow-x-auto bg-white shadow-md rounded-2xl border border-gray-100"
      >
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="bg-indigo-100 text-indigo-800">
              <th className="py-3 px-6 text-sm font-semibold">Student</th>
              <th className="py-3 px-6 text-sm font-semibold">Class</th>
              <th className="py-3 px-6 text-sm font-semibold">Amount (₦)</th>
              <th className="py-3 px-6 text-sm font-semibold">Status</th>
              <th className="py-3 px-6 text-sm font-semibold">Payment Date</th>
              <th className="py-3 px-6 text-sm font-semibold">Method</th>
              <th className="py-3 px-6 text-sm font-semibold text-right">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.length > 0 ? (
              filteredPayments.map((p, i) => (
                <motion.tr
                  key={p.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="border-b hover:bg-indigo-50 transition"
                >
                  <td className="py-4 px-6 font-medium">{p.studentName}</td>
                  <td className="py-4 px-6">{p.class}</td>
                  <td className="py-4 px-6 font-semibold text-indigo-700">
                    ₦{p.amount.toLocaleString()}
                  </td>
                  <td className="py-4 px-6">
                    {p.paid ? (
                      <span className="flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-1" /> Paid
                      </span>
                    ) : (
                      <span className="flex items-center text-red-600">
                        <XCircle className="w-4 h-4 mr-1" /> Pending
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6">{p.date}</td>
                  <td className="py-4 px-6">{p.method}</td>
                  <td className="py-4 px-6 text-right">
                    {!p.paid ? (
                      <button
                        onClick={() => handlePayNow(p)}
                        className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg shadow flex items-center gap-2"
                      >
                        <CreditCard className="w-4 h-4" /> Pay Now
                      </button>
                    ) : (
                      <button
                        onClick={() => handleViewReceipt(p)}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm px-4 py-2 rounded-lg shadow flex items-center gap-2"
                      >
                        <Receipt className="w-4 h-4" /> View Receipt
                      </button>
                    )}
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="py-6 text-center text-gray-500">
                  No payment records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </motion.div>

      {/* 💰 Pay Now Modal */}
      <AnimatePresence>
        {showPayModal && selectedPayment && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative"
            >
              <button
                onClick={() => setShowPayModal(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-xl font-semibold text-indigo-900 mb-4">
                Pay Now - {selectedPayment.studentName}
              </h2>
              <p className="text-gray-600 mb-2">
                Class: <span className="font-medium">{selectedPayment.class}</span>
              </p>
              <p className="text-gray-600 mb-4">
                Amount Due:{" "}
                <span className="font-semibold text-indigo-700">
                  ₦{selectedPayment.amount.toLocaleString()}
                </span>
              </p>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-indigo-500"
                />
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-1/2 border rounded-lg px-3 py-2 focus:outline-indigo-500"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-1/2 border rounded-lg px-3 py-2 focus:outline-indigo-500"
                  />
                </div>
                <button
                  onClick={() => {
                    setShowPayModal(false);
                    alert("✅ Payment Successful!");
                  }}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium mt-2"
                >
                  Confirm Payment
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🧾 Receipt Modal */}
      <AnimatePresence>
        {showReceipt && selectedPayment && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative"
            >
              <button
                onClick={() => setShowReceipt(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-xl font-semibold text-indigo-900 mb-4">
                Payment Receipt
              </h2>
              <div className="text-gray-700 space-y-2">
                <p>
                  <strong>Student:</strong> {selectedPayment.studentName}
                </p>
                <p>
                  <strong>Class:</strong> {selectedPayment.class}
                </p>
                <p>
                  <strong>Amount Paid:</strong> ₦
                  {selectedPayment.amount.toLocaleString()}
                </p>
                <p>
                  <strong>Date:</strong> {selectedPayment.date}
                </p>
                <p>
                  <strong>Method:</strong> {selectedPayment.method}
                </p>
                <p>
                  <strong>Reference:</strong> {selectedPayment.reference}
                </p>
              </div>
              <button
                onClick={() => setShowReceipt(false)}
                className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

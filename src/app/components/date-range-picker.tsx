"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Filter } from "lucide-react"

export default function DateRangePicker({ onChange }) {
  const [dateRange, setDateRange] = useState({ start: "", end: "" })
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    const updated = { ...dateRange, [name]: value }
    setDateRange(updated)
    onChange(updated)
  }

  return (
    <motion.div
      className="flex flex-wrap items-center gap-4 mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white/20 backdrop-blur-xl px-4 py-3 rounded-2xl border border-white/20 text-white hover:bg-white/30 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Filter className="w-5 h-5" />
        <span>Filter Data</span>
      </motion.button>

      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : -20,
          scale: isOpen ? 1 : 0.9,
        }}
        className="flex flex-wrap gap-4"
      >
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
          <input
            type="date"
            name="start"
            onChange={handleChange}
            className="pl-10 pr-4 py-3 bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/60 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
            aria-label="Start Date"
          />
        </div>

        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
          <input
            type="date"
            name="end"
            onChange={handleChange}
            className="pl-10 pr-4 py-3 bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/60 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
            aria-label="End Date"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

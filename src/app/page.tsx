"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "./components/navbar"
import MetricCard from "./components/metric-card"
import ChartContainer from "./components/chart-container"
import DateRangePicker from "./components/date-range-picker"
import LoadingSpinner from "./components/loading-spinner"
import { metrics, chartData } from "./data/metrics-data"

interface Metric {
  title: string
  value: string
  icon: string
  details: string
  trend: string
  change: string
}

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedMetric, setSelectedMetric] = useState<Metric | null>(null)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleRangeChange = () => {
    setIsLoading(true)
    // Simulate data fetching
    setTimeout(() => setIsLoading(false), 1000)
  }

  const handleMetricClick = (metric: Metric) => {
    setSelectedMetric(metric)
  }

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row max-w-[1440px] mx-auto px-6 py-10 gap-10">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/4 w-full"
        >
          <Navbar />
        </motion.aside>

        {/* Main Content */}
        <motion.main
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:w-3/4 w-full space-y-10"
        >
          <DateRangePicker onChange={handleRangeChange} />

          {/* Metrics Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {metrics.map((metric, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MetricCard
                  {...metric}
                  onClick={() => handleMetricClick(metric)}
                  isSelected={selectedMetric?.title === metric.title}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Charts Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ChartContainer data={chartData} />
          </motion.div>

          {/* Selected Metric Details */}
          <AnimatePresence>
            {selectedMetric && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">{selectedMetric.title} Details</h3>
                  <button
                    onClick={() => setSelectedMetric(null)}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-white/80 mt-2">{selectedMetric.details}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.main>
      </div>
    </div>
  )
}

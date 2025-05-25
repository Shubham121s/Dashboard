"use client"
import { motion } from "framer-motion"
import { TrendingUp, TrendingDown } from "lucide-react"


type MetricCardProps = {
  title: string
  value: string | number
  icon: React.ReactNode
  onClick?: () => void
  isSelected?: boolean
  trend?: "up" | "down"
  change?: string
}

export default function MetricCard({ title, value, icon, onClick, isSelected, trend = "up", change = "+12%" }: MetricCardProps) {
  return (
    <motion.div
      onClick={onClick}
      className={`relative overflow-hidden bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl p-6 rounded-3xl border transition-all duration-300 cursor-pointer group ${
        isSelected ? "border-purple-400 shadow-2xl shadow-purple-500/25" : "border-white/20 hover:border-white/40"
      }`}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
      }}
      whileTap={{ scale: 0.95 }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              left: `${20 + i * 30}%`,
              top: `${50 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-4 h-full">
        <motion.div
          className="text-5xl mb-2 filter drop-shadow-lg"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>

        <h2 className="text-lg font-semibold tracking-wide text-white/90">{title}</h2>

        <motion.p
          className="text-4xl font-bold text-white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {value}
        </motion.p>

        <div className="flex items-center gap-2 text-sm">
          {trend === "up" ? (
            <TrendingUp className="w-4 h-4 text-green-400" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-400" />
          )}
          <span className={`font-medium ${trend === "up" ? "text-green-400" : "text-red-400"}`}>{change}</span>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
    </motion.div>
  )
}

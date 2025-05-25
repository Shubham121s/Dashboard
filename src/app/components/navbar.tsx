"use client"
import { motion } from "framer-motion"
import { BarChart3, TrendingUp, Users, DollarSign } from "lucide-react"

export default function Navbar() {
  const navItems = [
    { icon: BarChart3, label: "Dashboard", active: true },
    { icon: TrendingUp, label: "Analytics" },
    { icon: Users, label: "Users" },
    { icon: DollarSign, label: "Revenue" },
  ]

  return (
    <motion.nav
      className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl shadow-2xl p-6 rounded-3xl border border-white/20 h-full flex flex-col justify-between min-h-[400px]"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-wide">Dashboard Pro</h1>
        </motion.div>

        <div className="space-y-3">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer ${
                item.active ? "bg-white/20 text-white shadow-lg" : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center text-white/60 text-sm"
      >
       Shubham
      </motion.div>
    </motion.nav>
  )
}

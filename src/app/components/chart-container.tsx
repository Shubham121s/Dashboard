"use client"
import { motion } from "framer-motion"
import { Line, Bar, Doughnut } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend, Filler)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function ChartContainer({ data }) {
  const enhancedLineData = {
    ...data.line,
    datasets: data.line.datasets.map((dataset) => ({
      ...dataset,
      borderWidth: 3,
      pointRadius: 6,
      pointHoverRadius: 8,
      pointBackgroundColor: "#ffffff",
      pointBorderColor: dataset.borderColor,
      pointBorderWidth: 2,
      tension: 0.4,
      fill: true,
      backgroundColor: "rgba(59,130,246,0.1)",
    })),
  }

  const enhancedBarData = {
    ...data.bar,
    datasets: data.bar.datasets.map((dataset) => ({
      ...dataset,
      borderRadius: 8,
      borderSkipped: false,
    })),
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 1,
        cornerRadius: 12,
        padding: 12,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#ffffff80",
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "#ffffff80",
        },
      },
    },
  }

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#ffffff",
          padding: 20,
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 1,
        cornerRadius: 12,
        padding: 12,
      },
    },
    cutout: "60%",
  }

  const chartItems = [
    {
      title: "User Growth",
      chart: <Line data={enhancedLineData} options={chartOptions} />,
      gradient: "from-blue-500/20 to-cyan-500/20",
      icon: "📈",
    },
    {
      title: "Sales Breakdown",
      chart: <Bar data={enhancedBarData} options={chartOptions} />,
      gradient: "from-green-500/20 to-emerald-500/20",
      icon: "📊",
    },
    {
      title: "Device Usage",
      chart: <Doughnut data={data.pie} options={doughnutOptions} />,
      gradient: "from-purple-500/20 to-pink-500/20",
      icon: "📱",
    },
  ]

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {chartItems.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            rotateY: 5,
          }}
          className={`relative overflow-hidden bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/20 group`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Animated background */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          ></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{item.icon}</span>
              <h3 className="text-white font-bold text-lg">{item.title}</h3>
            </div>

            <div className="h-64 relative">{item.chart}</div>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
        </motion.div>
      ))}
    </motion.div>
  )
}

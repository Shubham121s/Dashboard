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
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartData,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
)

interface ChartContainerProps {
  data: {
    line: ChartData<"line">
    bar: ChartData<"bar">
    pie: ChartData<"doughnut">
  }
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: "rgba(255, 255, 255, 0.8)",
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "rgba(255, 255, 255, 0.6)",
      },
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
    },
    y: {
      ticks: {
        color: "rgba(255, 255, 255, 0.6)",
      },
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
    },
  },
}

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom" as const,
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

export default function ChartContainer({ data }: ChartContainerProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <motion.div
        className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-lg font-semibold text-white mb-4">User Growth</h3>
        <div className="h-64">
          <Line data={data.line} options={chartOptions} />
        </div>
      </motion.div>

      <motion.div
        className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="text-lg font-semibold text-white mb-4">Product Sales</h3>
        <div className="h-64">
          <Bar data={data.bar} options={chartOptions} />
        </div>
      </motion.div>

      <motion.div
        className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 lg:col-span-2"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-lg font-semibold text-white mb-4">Device Distribution</h3>
        <div className="h-64 flex justify-center">
          <div className="w-64">
            <Doughnut data={data.pie} options={doughnutOptions} />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

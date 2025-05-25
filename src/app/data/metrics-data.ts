export const metrics = [
  {
    title: "Users",
    value: "4.5K",
    icon: "👥",
    details: "User growth is up 12% this month with strong engagement metrics",
    trend: "up",
    change: "+12%",
  },
  {
    title: "Revenue",
    value: "$12.3K",
    icon: "💰",
    details: "Revenue increased by 20% compared to last month, exceeding targets",
    trend: "up",
    change: "+20%",
  },
  {
    title: "Orders",
    value: "1.2K",
    icon: "📦",
    details: "Order volume remains stable with improved conversion rates",
    trend: "up",
    change: "+5%",
  },
]

export const chartData = {
  line: {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Users",
        data: [300, 400, 500, 700],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  },
  bar: {
    labels: ["Product A", "Product B", "Product C"],
    datasets: [
      {
        label: "Sales",
        data: [120, 200, 150],
        backgroundColor: ["#f97316", "#3b82f6", "#10b981"],
      },
    ],
  },
  pie: {
    labels: ["Mobile", "Desktop", "Tablet"],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: ["#ef4444", "#6366f1", "#facc15"],
        borderWidth: 0,
      },
    ],
  },
}

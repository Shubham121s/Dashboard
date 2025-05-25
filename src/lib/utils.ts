export function formatNumber(num) {
  return Intl.NumberFormat().format(num)
}

export function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

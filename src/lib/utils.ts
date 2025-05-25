export function formatNumber(num: number): string {
  return Intl.NumberFormat().format(num);
}

export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

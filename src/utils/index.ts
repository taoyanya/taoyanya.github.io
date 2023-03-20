const COLORS = [
  "#ef4444",
  "#84cc16",
  "#0ea5e9",
  "#8b5cf6",
  "#f97316",
  "#10b981",
  "#64748B",
];

export function getRandomColor(): string {
  const randomNum = Math.floor(Math.random() * 6);
  return COLORS[randomNum];
}

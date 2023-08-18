export function useRandomColor() {
  const randomNumberStr = Math.random().toString(16).slice(2, 8).padEnd(6, "0");

  return `#${randomNumberStr}`;
}

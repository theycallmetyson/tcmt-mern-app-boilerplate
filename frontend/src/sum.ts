export default function sum(...numbers: number[]) {
  return numbers.reduce((total, n) => total + n, 0)
}

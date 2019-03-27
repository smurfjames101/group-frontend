/* eslint-disable no-bitwise */

import { MONTHS_PER_YEAR } from './Constants'

export const fill = (n) => {
  const arr = []
  for (let i = 0; i < n; i += 1) {
    arr.push(i)
  }
  return arr
}

const COLORS = [
  'FF005D',
  '0085B6',
  '0BB4C1',
  '00D49D',
  'FEDF03',

  '233D4D',
  'FE7F2D',
  'FCCA46',
  'A1C181',
  '579C87',
]

export const randomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)]

let color = -1
export const nextColor = () => {
  color = (color + 1) % COLORS.length
  return COLORS[color]
}


export const hexToRgb = (hex) => {
  const v = parseInt(hex, 16)
  const r = (v >> 16) & 255
  const g = (v >> 8) & 255
  const b = v & 255
  return [r, g, b]
}

export const colourIsLight = (r, g, b) => {
  const a = 1 - (((0.299 * r) + (0.587 * g) + (0.114 * b)) / 255)
  return (a < 0.5)
}

export const addMonthsToYear = (year, monthsToAdd) => {
  let y = year
  let m = monthsToAdd
  while (m >= MONTHS_PER_YEAR) {
    m -= MONTHS_PER_YEAR
    y += 1
  }
  return { year: y, month: m + 1 }
}

export const createYears = (year, month) =>{
  const r = addMonthsToYear(year,month)
  return new Date(`${r.year}-${r.month}`)
}
export const addMonthsToYearAsDate = (year, monthsToAdd) => {
  const r = addMonthsToYear(year, monthsToAdd)
  return new Date(`${r.year}-${r.month}`)
}


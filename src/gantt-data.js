import { readFileSync } from 'node:fs'
import path from 'node:path';
import yaml from 'js-yaml';

import {getPlace, getTechnology} from './gantt-utils'

const data = yaml.load(readFileSync(path.resolve(process.cwd(), 'data/data.yaml')));

const now = new Date();

function parseDate(dateString) {
  if (/present/i.test(dateString)) {
    return { year: now.getFullYear(), month: now.getMonth() + 1, day: null };
  }
  const [year, month = null, day = null] = dateString.split('.').map((s) => parseInt(s, 10))
  return { year, month, day }
}

let minYear = Infinity
let maxYear = -Infinity


for (const project of Object.values(data.projects)) {
  const { date, place, tech } = project
  const [startDate, endDate] = String(date).split(/\s*-\s*|\s+to\s+|,/)
  const start = parseDate(startDate)
  const end = endDate ? parseDate(endDate) : start
  if (start.year < minYear) {
    minYear = start.year
  }
  if (end.year > maxYear) {
    maxYear = end.year
  }
  project.startDate = start
  project.endDate = end
  if (place && !getPlace(data.places, place, false)) {
    console.error(`${place} not specified in data.places`)
  }
  if (!tech) {
    project.tech = []
  } else {
    for (const id of tech) {
      if (!getTechnology(data.technologies, id, false)) {
        console.error(`${id} not specified in data.tech`)
      }
    }
  }
}
const yearMonths = []
for (let year = maxYear; year >= minYear; year--) {
  for (let month = 12; month >= 1; month--) {
    yearMonths.push({
      year,
      month,
      projects: Object.values(data.projects).filter(
        ({ endDate }) => endDate.year === year && endDate.month === month
      )
    })
  }
}


export const props = {
  yearMonths,
  places: data.places,
  technologies: data.technologies,
}

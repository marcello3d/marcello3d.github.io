function getId(name) {
  return (
    (name &&
      name
        .trim()
        .toLowerCase()
        .replace(/[^a-z+]/g, '')) ||
    undefined
  )
}

function roundDateDown(date = new Date()) {
  return toEpoch(date.getFullYear(), date.getMonth(), 1)
}
function roundDateUp(date = new Date()) {
  return toEpoch(date.getFullYear(), date.getMonth() + 1, 0)
}

const JANUARY = 0
const FEBRUARY = 1
const MARCH = 2
const APRIL = 3
const MAY = 4
const JUNE = 5
const JULY = 6
const AUGUST = 7
const SEPTEMBER = 8
const OCTOBER = 9
const NOVEMBER = 10
const DECEMBER = 11

function toEpoch(year, month, date) {
  return new Date(year, month, date, 0, 0, 0, 0).getTime()
}

function getFuzzyDate(year, month, uncertain) {
  if (month) {
    // convert to zero-index
    month--
    if (uncertain) {
      return {
        min: toEpoch(year, month, 1),
        max: toEpoch(year, month + 1, 0),
        uncertain: true
      }
    }
    return {
      min: toEpoch(year, month, 1),
      max: toEpoch(year, month + 1, 0)
    }
  }
  if (uncertain) {
    return {
      min: toEpoch(year - 1, JULY, 1),
      max: toEpoch(year + 1, JUNE, 30),
      uncertain: true
    }
  }
  return {
    min: toEpoch(year, JANUARY, 1),
    max: toEpoch(year, DECEMBER, 31)
  }
}

function parseDate(dateString) {
  if (dateString === 'present') {
    return {
      min: roundDateDown(),
      max: roundDateUp(),
      present: true
    }
  }
  const match = /(\d{4})?(?:-(\d{2}))?(\?)?/.exec(dateString)
  if (!match) {
    throw new Error('unknown toEpoch:' + dateString)
  }
  const [, yearStr, monthStr, uncertain] = match
  return getFuzzyDate(
    yearStr ? parseInt(yearStr, 10) : undefined,
    monthStr ? parseInt(monthStr, 10) : undefined,
    Boolean(uncertain)
  )
}

function compareDates(a, b) {
  const i = compareDate(a.start, b.start)
  if (i !== 0) {
    return i
  }
  return -compareDate(a.end, b.end)
}

function compareDate(a, b) {
  if (a.min !== b.min) {
    return a.min - b.min
  }
  if (a.max !== b.max) {
    return b.max - a.max
  }
  return 0
}

exports.transformRawData = function transformRawData(data) {
  const things = {
    library: [],
    tech: [],
    place: [],
    project: [],
    tool: []
  }
  const maps = {
    library: {},
    tech: {},
    place: {},
    project: {},
    tool: {}
  }
  // let min
  // let max
  for (const [name, type, start, end, place, tech] of data) {
    if (!start || !end || !name || !type) {
      throw new Error(
        'missing data in ' + JSON.stringify({ name, type, start, end })
      )
    }
    const filteredTech = tech
      .split(/\s*,\s*/g)
      .filter((x) => x)
      .map(getId)
    const thing = {
      name,
      date: `${start} to ${end}`,
      place: place ? getId(place) : undefined,
      tech: filteredTech.length ? filteredTech : undefined
    }
    things[type].push(thing)
    maps[type][getId(name)] = thing
    // const thingMin = thing.start.min
    // const thingMax = thing.end.max
    // if (!min || thingMin < min) {
    //   min = thingMin
    // }
    // if (!max || thingMax > max) {
    //   max = thingMax
    // }
  }
  // for (const type of Object.keys(things)) {
  //   const thingArray = things[type]
  //   for (const thing of thingArray) {
  //     if (thing.place) {
  //       thing.place = maps.place[thing.place]
  //     }
  //     thing.tech = thing.tech.map((id) => maps.tool[id])
  //   }
  //   thingArray.sort(compareDates)
  // }
  // things.min = min
  // things.max = max
  return maps
}


export function getPlace(places, place, orDefault = { name: place }) {
  return places[place] || orDefault
}

export function getTechnology(technologies, id, orDefault = { name: id }) {
  return technologies[id] || orDefault
}

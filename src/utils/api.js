const SWAPI_URL = 'https://swapi.co/api'

export async function getPeopleByPage(pageNo = 1) {
  const response = await fetch(
    `${SWAPI_URL}/people/${pageNo > 1 ? `?page=${pageNo}` : ''}`,
  )
  const {results, next, previous, count} = await response.json()

  return {
    count,
    next,
    previous,
    people: results,
  }
}

export async function getAllFilms() {
  const response = await fetch(`${SWAPI_URL}/films/`)
  const {results} = await response.json()
  const films = results.map(({title, url}) => ({title, url}))
  return films
}

export async function getInitialData() {
  return Promise.all([getAllFilms(), getPeopleByPage()]).then(
    ([films, {count, next, previous, people}]) => ({
      films,
      count,
      next,
      previous,
      people,
    }),
  )
}

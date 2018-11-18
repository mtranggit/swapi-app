import {
  RECEIVE_ALL_FILMS,
  RECEIVE_PEOPLE_PAGE,
  receiveAllFilms,
  receivePeople,
} from '../people'

describe('actions', () => {
  test('should create a correct RECEIVE_ALL_FILMS action', () => {
    const films = [
      {title: 'A new Hope', url: 'https://swapi.co/api/films/1/'},
      {title: 'Attack of the Clones', url: 'https://swapi.co/api/films/5/'},
      {title: 'The Phantom Menace', url: 'https://swapi.co/api/films/4/'},
    ]
    const expectedAction = {
      type: RECEIVE_ALL_FILMS,
      films,
    }
    expect(receiveAllFilms(films)).toEqual(expectedAction)
  })

  test('should create a correct RECEIVE_PEOPLE_PAGE action', () => {
    const peoplePage = [
      {previous: null},
      {next: 'https://swapi.co/api/people/?page=2'},
      {
        people: [
          {
            name: 'Luke Skywalker',
            height: '172',
            gender: 'male',
            url: 'https://swapi.co/api/people/1/',
          },
          {
            name: 'Leia Organa',
            height: '150',
            gender: 'female',
            url: 'https://swapi.co/api/people/5/',
          },
          {
            name: 'Owen Lars',
            height: '178',
            gender: 'male',
            url: 'https://swapi.co/api/people/6/',
          },
        ],
      },
    ]
    const {people, next, previous} = peoplePage
    const expectedAction = {
      type: RECEIVE_PEOPLE_PAGE,
      people,
      previous,
      next,
    }
    expect(receivePeople(peoplePage)).toEqual(expectedAction)
  })
})

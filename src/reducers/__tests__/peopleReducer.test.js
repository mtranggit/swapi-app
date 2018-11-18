import peopleReducer from '../peopleReducer'
import {RECEIVE_ALL_FILMS, RECEIVE_PEOPLE_PAGE} from '../../actions/people'

describe('people reducer', () => {
  let initialState
  beforeEach(() => {
    initialState = {
      people: [],
      peopleEntities: {},
      filmsEntities: {},
    }
  })
  test('should return the initial state', () => {
    expect(peopleReducer(undefined, {})).toEqual(initialState)
  })
  test('should return a proper state when RECEIVE_ALL_FILMS action', () => {
    const films = [
      {title: 'A new Hope', url: 'https://swapi.co/api/films/1/'},
      {title: 'Attack of the Clones', url: 'https://swapi.co/api/films/5/'},
      {title: 'The Phantom Menace', url: 'https://swapi.co/api/films/4/'},
    ]
    const filmsEntities = {
      '1': {title: 'A new Hope', url: 'https://swapi.co/api/films/1/'},
      '5': {
        title: 'Attack of the Clones',
        url: 'https://swapi.co/api/films/5/',
      },
      '4': {title: 'The Phantom Menace', url: 'https://swapi.co/api/films/4/'},
    }
    const action = {
      type: RECEIVE_ALL_FILMS,
      films,
    }
    const expectedState = Object.assign({...initialState}, {filmsEntities})
    expect(peopleReducer(undefined, action)).toEqual(expectedState)
  })
  test('should return a proper state when RECEIVE_PEOPLE_PAGE action', () => {
    const peoplePage = {
      previous: null,
      next: 'https://swapi.co/api/people/?page=2',
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
    }
    const {people, next, previous} = peoplePage
    // console.log('people page', {people, next, previous})
    const peopleEntities = {
      '1': {
        name: 'Luke Skywalker',
        height: '172',
        gender: 'male',
        url: 'https://swapi.co/api/people/1/',
      },
      '5': {
        name: 'Leia Organa',
        height: '150',
        gender: 'female',
        url: 'https://swapi.co/api/people/5/',
      },
      '6': {
        name: 'Owen Lars',
        height: '178',
        gender: 'male',
        url: 'https://swapi.co/api/people/6/',
      },
    }
    const action = {
      type: RECEIVE_PEOPLE_PAGE,
      ...peoplePage,
    }
    const expectedState = {
      ...initialState,
      previous,
      next,
      people,
      peopleEntities,
    }
    expect(peopleReducer(undefined, action)).toEqual(expectedState)
  })
})

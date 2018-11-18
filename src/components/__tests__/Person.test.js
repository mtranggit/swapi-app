import React from 'react'
import {render} from 'react-testing-library'
import {Person, mapStateToProps} from '../Person'

test('mapStateToProps should return a correct props object', () => {
  const props = {
    match: {
      params: {
        id: '1',
      },
    },
    history: {},
  }
  const state = {
    starWarPeople: {
      peopleEntities: {
        '1': {
          name: 'Luke Skywalker',
          height: '172',
          gender: 'male',
          url: 'https://swapi.co/api/people/1/',
          films: [
            'https://swapi.co/api/films/1/',
            'https://swapi.co/api/films/5/',
          ],
        },
        '5': {
          name: 'Leia Organa',
          height: '150',
          gender: 'female',
          url: 'https://swapi.co/api/people/5/',
          films: ['https://swapi.co/api/films/1/'],
        },
        '6': {
          name: 'Owen Lars',
          height: '178',
          gender: 'male',
          url: 'https://swapi.co/api/people/6/',
          films: [
            'https://swapi.co/api/films/1/',
            'https://swapi.co/api/films/5/',
          ],
        },
      },
      filmsEntities: {
        '1': {title: 'A new Hope', url: 'https://swapi.co/api/films/1/'},
        '5': {
          title: 'Attack of the Clones',
          url: 'https://swapi.co/api/films/5/',
        },
        '4': {
          title: 'The Phantom Menace',
          url: 'https://swapi.co/api/films/4/',
        },
      },
    },
  }
  const expected = {
    person: {
      name: 'Luke Skywalker',
      height: '172',
      gender: 'male',
      url: 'https://swapi.co/api/people/1/',
      films: ['https://swapi.co/api/films/1/', 'https://swapi.co/api/films/5/'],
    },
    films: ['A new Hope', 'Attack of the Clones'],
    id: '1',
    history: {},
  }
  expect(mapStateToProps(state, props)).toEqual(expected)
})

test('should display Person component correctly', () => {
  const props = {
    match: {
      params: {
        id: '1',
      },
    },
    history: {},
    person: {
      name: 'Luke Skywalker',
      height: '172',
      gender: 'male',
      url: 'https://swapi.co/api/people/1/',
      films: ['https://swapi.co/api/films/1/', 'https://swapi.co/api/films/5/'],
    },
    films: ['A new Hope', 'Attack of the Clones'],
    id: '1',
  }
  const {container, debug, getByText} = render(<Person {...props} />)
  // debug()
  expect(container).toBeDefined()
  expect(container.querySelector('.card.mb-3')).toBeTruthy()
  expect(container.querySelector('.card-header')).toBeTruthy()
  expect(container.querySelector('.card-body')).toBeTruthy()
  expect(container.querySelector('.card-title')).toBeTruthy()
  expect(container.querySelector('.form-group')).toBeTruthy()
  expect(container.querySelector('.btn.btn-primary')).toBeTruthy()
  getByText('Person details')
  getByText('Height:')
  getByText('Birth Year:')
  getByText('Gender:')
  getByText('Films:')
  getByText('Luke Skywalker')
  getByText('172')
  getByText('male')
  getByText('A new Hope, Attack of the Clones')
})

import React from 'react'
import {render} from 'react-testing-library'
import {People, mapStateToProps} from '../People'

test('mapStateToProps should return a correct formatted props object', () => {
  const props = {
    history: {},
  }
  const state = {
    starWarPeople: {
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
    },
  }
  const {people, next, previous} = state.starWarPeople
  const expected = {
    people,
    next,
    previous,
    history: {},
  }
  expect(mapStateToProps(state, props)).toEqual(expected)
})

test('should display People component correctly', () => {
  const props = {
    history: {},
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
  const {container, debug, getByText} = render(<People {...props} />)
  // debug()
  expect(container).toBeDefined()
  expect(container.querySelector('.table.table-hover')).toBeTruthy()
  expect(container.querySelectorAll('table tr').length).toEqual(5)
  getByText('Star War People')
  getByText('Name')
  getByText('Height')
  getByText('Mass')
  getByText('Next')
})

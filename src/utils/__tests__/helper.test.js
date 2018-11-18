import {formatEntities, getIdFromUrl, getQueryStringParameters} from '../helper'

describe('helper utils', () => {
  test('should return a correct entity format', () => {
    const films = [
      {title: 'A new Hope', url: 'https://swapi.co/api/films/1/'},
      {title: 'Attack of the Clones', url: 'https://swapi.co/api/films/5/'},
      {title: 'The Phantom Menace', url: 'https://swapi.co/api/films/4/'},
    ]
    const expectedFilmsEntities = {
      '1': {title: 'A new Hope', url: 'https://swapi.co/api/films/1/'},
      '5': {
        title: 'Attack of the Clones',
        url: 'https://swapi.co/api/films/5/',
      },
      '4': {title: 'The Phantom Menace', url: 'https://swapi.co/api/films/4/'},
    }
    expect(formatEntities(films)).toEqual(expectedFilmsEntities)
  })
  test('should return id found at the end of the url path', () => {
    const url = 'https://swapi.co/api/films/1/'
    const url2 = 'https://swapi.co/api/films/'
    const url3 = 'https://swapi.co/api/films/1/abc'
    expect(getIdFromUrl(url)).toEqual('1')
    expect(getIdFromUrl(url2)).toEqual('films')
    expect(getIdFromUrl(url3)).toEqual('abc')
  })
  test('should return parameters name and value from a given url with query params', () => {
    const url = 'https://swapi.co/api/people/?page=2'
    const url2 = 'https://swapi.co/api/people/?page=2&pagesize=10'
    expect(getQueryStringParameters(url)).toEqual({page: '2'})
    expect(getQueryStringParameters(url2)).toEqual({page: '2', pagesize: '10'})
  })
})

import {showLoading, hideLoading} from 'react-redux-loading-bar'

import {getPeopleByPage, getInitialData} from '../utils/api'

export const RECEIVE_PEOPLE_PAGE = 'RECEIVE_PEOPLE_PAGE'
export const RECEIVE_ALL_FILMS = 'RECEIVE_ALL_FILMS'

export function receivePeople({people, previous, next}) {
  return {
    type: RECEIVE_PEOPLE_PAGE,
    people,
    previous,
    next,
  }
}

export function receiveAllFilms(films) {
  return {
    type: RECEIVE_ALL_FILMS,
    films,
  }
}

export const getPeople = pageNo => async dispatch => {
  dispatch(showLoading())
  const peoplePage = await getPeopleByPage(pageNo)
  dispatch(receivePeople(peoplePage))
  dispatch(hideLoading())
}

export const handleInitialData = () => async dispatch => {
  dispatch(showLoading())
  const {films, people, previous, next} = await getInitialData()
  dispatch(receivePeople({people, previous, next}))
  dispatch(receiveAllFilms(films))
  dispatch(hideLoading())
}

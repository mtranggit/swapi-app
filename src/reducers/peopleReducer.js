import {RECEIVE_PEOPLE_PAGE, RECEIVE_ALL_FILMS} from '../actions/people'
import {formatEntities} from '../utils/helper'

const initialState = {
  people: [],
  peopleEntities: {},
  filmsEntities: {},
}

export default function getPeople(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PEOPLE_PAGE: {
      const {people, next, previous} = action
      return {
        ...state,
        people,
        next,
        previous,
        peopleEntities: formatEntities(people),
      }
    }
    case RECEIVE_ALL_FILMS: {
      const {films} = action
      return {
        ...state,
        filmsEntities: formatEntities(films),
      }
    }
    default: {
      return state
    }
  }
}

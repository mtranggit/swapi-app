import React from 'react'
import {connect} from 'react-redux'

import {getIdFromUrl} from '../utils/helper'

export const Person = props => {
  const {person, id, films, history} = props

  if (!person) {
    return <div>Sorry, this star war person does not exist!</div>
  }

  const goBack = e => {
    e.preventDefault()
    history.goBack()
  }

  const {name, height, birth_year, gender} = person

  return (
    <div key={id} className="card mb-3">
      <h5 className="card-header">Person details</h5>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="form-group">
          <label htmlFor="height">
            Height: <span id="height">{height}</span>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="birthYear">
            Birth Year: <span id="birthYear">{birth_year}</span>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="gender">
            Gender: <span id="gender">{gender}</span>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="films">
            Films: <span id="films">{films.join(', ')}</span>
          </label>
        </div>
        <a href="/#" onClick={goBack} className="btn btn-primary">
          Back
        </a>
      </div>
    </div>
  )
}

export const mapStateToProps = ({starWarPeople}, {match, history}) => {
  const {id} = match.params
  const {peopleEntities, filmsEntities} = starWarPeople
  const person = peopleEntities[id]
  if (!person) {
    return {
      person: null,
      films: null,
      id,
      history,
    }
  }
  const films = person.films
    .map(film => {
      return filmsEntities[getIdFromUrl(film)]
    })
    .map(f => f.title)

  return {
    person,
    films,
    id,
    history,
  }
}

export default connect(mapStateToProps)(Person)

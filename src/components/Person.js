import React from 'react'
import {connect} from 'react-redux'

import {getIdFromUrl} from '../utils/helper'

const Person = props => {
  const {person, id, films} = props

  if (!person) {
    return <div>Sorry, this star war person does not exist!</div>
  }

  const {name, height, birth_year, gender} = person

  return (
    <div key={id}>
      <h4>Person details</h4>
      <p>Name: {name}</p>
      <p>Height: {height}</p>
      <p>Birth Year: {birth_year}</p>
      <p>Gender: {gender}</p>
      <div>
        Films: {films.join(', ')}
        {/* <ul>
          {films.map(f => (
            <li>{f}</li>
          ))}
        </ul> */}
      </div>
    </div>
  )
}

const mapStateToProps = ({starWarPeople}, {match}) => {
  const {id} = match.params
  const {peopleEntities, filmsEntities} = starWarPeople
  const person = peopleEntities[id]
  if (!person) {
    return {
      person: null,
      films: null,
      id,
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
  }
}

export default connect(mapStateToProps)(Person)

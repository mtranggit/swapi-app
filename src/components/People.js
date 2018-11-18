import React from 'react'
import {connect} from 'react-redux'

import {getPeople} from '../actions/people'
import {getIdFromUrl, getQueryStringParameters} from '../utils/helper'

const PersonList = props => {
  const {name, height, mass, url} = props.person
  const personId = getIdFromUrl(url)
  return (
    <tr
      onClick={() => props.history.push(`/people/${personId}`)}
      style={{cursor: 'pointer'}}
    >
      <td>{name}</td>
      <td>{height}</td>
      <td>{mass}</td>
    </tr>
  )
}

export const People = props => {
  const gotoPage = (e, url) => {
    e.preventDefault()
    const {page} = getQueryStringParameters(url)
    dispatch(getPeople(+page))
  }

  const {people, next, previous, history, dispatch} = props

  return (
    <div>
      <h4>Star War People</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Height</th>
            <th scope="col">Mass</th>
          </tr>
        </thead>
        <tbody>
          {people.map(person => (
            <PersonList person={person} key={person.url} history={history} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              {' '}
              {previous && (
                <a
                  href="/#"
                  onClick={e => gotoPage(e, previous)}
                  data-testid="previous"
                >
                  Previous
                </a>
              )}
            </td>
            <td />
            <td>
              {' '}
              {next && (
                <a
                  href="/#"
                  onClick={e => gotoPage(e, next)}
                  data-testid="next"
                >
                  Next
                </a>
              )}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export function mapStateToProps({starWarPeople}, {history}) {
  const {people, next, previous} = starWarPeople
  return {
    people,
    next,
    previous,
    history,
  }
}

export default connect(mapStateToProps)(People)

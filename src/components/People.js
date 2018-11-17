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
const People = props => {
  const {people, next, previous, history, dispatch} = props
  const gotoPage = (e, url) => {
    e.preventDefault()
    // console.log('go to page url', url)
    const {page} = getQueryStringParameters(url)
    dispatch(getPeople(+page))
  }

  return (
    <div>
      <h4>Star War People</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
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
                <a href="" onClick={e => gotoPage(e, previous)}>
                  Previous
                </a>
              )}
            </td>
            <td />
            <td>
              {' '}
              {next && (
                <a href="" onClick={e => gotoPage(e, next)}>
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

function mapStateToProps({starWarPeople}, {history}) {
  const {people, next, previous} = starWarPeople
  return {
    people,
    next,
    previous,
    history,
  }
}

export default connect(mapStateToProps)(People)

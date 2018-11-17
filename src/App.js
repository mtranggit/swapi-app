import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'

import {handleInitialData} from './actions/people'
import People from './components/People'
import Person from './components/Person'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  componentDidMount = () => {
    this.props.dispatch(handleInitialData())
    // this.props.dispatch(getPeople())
  }

  render() {
    return (
      <Router>
        <div className="App">
          <LoadingBar />
          {this.props.loading === true ? null : (
            <Switch>
              <Route path="/people/:id" component={Person} />
              <Route path="/people" component={People} />
              <Route exact path="/" component={People} />
              <Route component={NotFound} />
            </Switch>
          )}
        </div>
      </Router>
    )
  }
}

function mapStateToProps({loadingBar}) {
  const {default: loading} = loadingBar
  return {
    loading: loading === 1,
  }
}
export default connect(mapStateToProps)(App)

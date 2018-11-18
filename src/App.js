import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'

import {handleInitialData} from './actions/people'
import Header from './components/Header'
import About from './components/About'
import People from './components/People'
import Person from './components/Person'
import NotFound from './components/NotFound'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

class App extends Component {
  componentDidMount = () => {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header branding="Star War Catalog" />
          <LoadingBar />
          <div className="container pt-3">
            {this.props.loading === true ? null : (
              <Switch>
                <Route path="/people/:id" component={Person} />
                <Route path="/people" component={People} />
                <Route path="/about" component={About} />
                <Route exact path="/" component={People} />
                <Route component={NotFound} />
              </Switch>
            )}
          </div>
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

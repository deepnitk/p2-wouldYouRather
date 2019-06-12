import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard';
import Question from './Question'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import Login from './Login'
import '../App.css';
import Leaderboard from './Leaderboard'
import ProtectedRoute from './ProtectedRoute'
import NewQuestion from './NewQuestion'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
				<Fragment>
					<div className='container'>
						<Nav />
							<div className="main-content"> 
								<Switch>
                <Route path="/" exact component={Login}/>
								<ProtectedRoute path='/dashboard' exact component={Dashboard} />
                <ProtectedRoute path='/leaderboard' component={Leaderboard} />
                <ProtectedRoute path='/add' exact component={NewQuestion} />
								</Switch>
							</div>
					</div>
				</Fragment>
			</Router>
    )
  }
}


export default connect()(App) 
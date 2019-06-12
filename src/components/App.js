import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import Login from './Login'
import '../App.css';
import Leaderboard from './Leaderboard'
import ProtectedRoute from './ProtectedRoute'
import NewQuestion from './NewQuestion'
import QuestionDetail from './QuestionDetail'
import NotFound from './NotFound'

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
                <ProtectedRoute path='/question/:id' component={QuestionDetail} />
                <Route path="/not-found" component={NotFound} />
								</Switch>
							</div>
					</div>
				</Fragment>
			</Router>
    )
  }
}


export default connect()(App) 
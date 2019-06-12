import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard';
import Question from './Question'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import Login from './Login'
import '../App.css';

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
								<Route path='/dashboard' exact component={Dashboard} />
								</Switch>
							</div>
					</div>
				</Fragment>
			</Router>
    )
  }
}


export default connect()(App) 
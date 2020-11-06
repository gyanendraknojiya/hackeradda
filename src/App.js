import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import { persistor } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import './App.css';
import Homepage from './Pages/Homepage/Homepage.component';
import RegisterPage from './Pages/Register/Register.page';

import firebase from './firebase';

import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/User/user.action';
import { UserSelector } from './Redux/User/User.selector';
import { createStructuredSelector } from 'reselect';
import Dashboard from './Pages/Dashboard/Dashboard.component';
import Header from './Components/Header/Header.component';

class App extends React.Component {
	unSubscribeFromAuth = null;
	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unSubscribeFromAuth = firebase.auth().onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				firebase
					.firestore()
					.collection('Users')
					.doc(userAuth.uid)
					.get()
					.then((doc) => setCurrentUser({ id: doc.id, ...doc.data() }));
			} else {
				setCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount() {
		this.unSubscribeFromAuth();
	}

	render() {
		return (
			<Router>
				<PersistGate persistor={persistor}>
					<Switch>
						<Route path="/account">
							{this.props.currentUser ? <Redirect to="/dashboard" /> : <RegisterPage />}
						</Route>
						<Route path="/dashboard">
							{this.props.currentUser ? (
								<div>
									<Route exact path="/dashboard">
										<Redirect to="/dashboard/home" />
									</Route>
									<Route exact path="/dashboard/:route">
										<Dashboard />
									</Route>
								</div>
							) : (
								<RegisterPage />
							)}
						</Route>

						<Route path="/" component={Homepage} />
					</Switch>
				</PersistGate>
			</Router>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

const mapStatetoProps = createStructuredSelector({
	currentUser: UserSelector
});

export default connect(mapStatetoProps, mapDispatchToProps)(App);

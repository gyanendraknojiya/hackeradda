import React from 'react';

import { Link } from 'react-router-dom';

import firebase from 'firebase';

import { connect } from 'react-redux';
import { UserSelector } from '../../Redux/User/User.selector';
import { createStructuredSelector } from 'reselect';

import './Header.styles.css';
import Logo from '../../logo.png';
import My from '../../my.png';

const Header = ({ currentUser }) => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark make-dark header">
				<span className="navbar-brand ml-lg-2">
					<img src={Logo} alt="logo" height="35px" className=" mr-2 logo-animation" />Hackeradda .<small>com</small>
				</span>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav m-auto">
						<li className="nav-item active ml-auto my-lg-auto my-1">
							<Link to="/">
								<span className="nav-link text-white">Home</span>
							</Link>
						</li>
						<li className="nav-item  ml-auto my-lg-auto my-1">
							<span className="nav-link">Categories</span>
						</li>
					</ul>
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active ml-auto my-lg-auto my-1 font-weight-bold">
							{currentUser ? (
								<Link to="/dashboard">
									<span className="nav-link text-white  ">Dashboard</span>
								</Link>
							) : null}
						</li>
						<li className="nav-item active ml-auto my-lg-auto my-1 mr-1 font-weight-bold">
							{currentUser ? (
								<span
									onClick={() => firebase.auth().signOut()}
									className="nav-link cursor-pointer text-danger"
								>
									SignOut
								</span>
							) : (
								<Link to="/account">
									<span className="nav-link text-white">Account</span>
								</Link>
							)}
						</li>
						{currentUser ? (
							<li className="nav-item  ml-auto my-lg-auto my-1">
								<a className="nav-link" href="#">
									<img src={My} alt="user-pic" height="30px" className="rounded-lg border" />
								</a>
							</li>
						) : null}
					</ul>
				</div>
			</nav>
		</div>
	);
};

const mapStatetoProps = createStructuredSelector({
	currentUser: UserSelector
});

export default connect(mapStatetoProps, null)(Header);

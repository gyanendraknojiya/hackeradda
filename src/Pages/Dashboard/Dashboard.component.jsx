import React, { useState, useEffect } from 'react';

import './Dashboard.styles.css';
import Header from '../../Components/Header/Header.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEdit, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import AddPost from '../../Components/AddPost/AddPost.component';

const Dashboard = ({ ...props }) => {
	const [ Display, setDisplay ] = useState('');

	useEffect(
		() => {
			if (props.match.params.route) {
				setDisplay(props.match.params.route);
			}
		},
		[ props.match.params.route ]
	);

	console.log('called');

	return (
		<div className="Dashboard vh-100 overflow-hidden">
			<div className="shadow border-bottom">
				<Header />
			</div>
			<div className="row m-0">
				{/* ---------------------------------------------------- Side Menu ---------------------------------------------------- */}

				<div
					className="d-none d-md-block col-md-1 shadow vh-100 text-center pt-4 border-right "
					style={{ backgroundColor: '#232525' }}
				>
					<div className="my-5">
						<Link to="/dashboard/home">
							<span
								className={`rounded-lg p-2 shadow cursor-pointer  ${Display === 'home'
									? 'bg-light text-dark'
									: 'bg-dark text-white'}`}
							>
								<FontAwesomeIcon icon={faUser} size="lg" />
							</span>
						</Link>
					</div>
					<div className="my-5">
						<Link to="/dashboard/all-posts">
							<span
								className={`rounded-lg p-2  shadow cursor-pointer  ${Display === 'all-posts'
									? 'bg-light text-dark'
									: 'bg-dark text-white'}`}
							>
								<FontAwesomeIcon icon={faBookOpen} size="lg" />
							</span>
						</Link>
					</div>
					<div className="my-5">
						<Link to="/dashboard/add-post">
							<span
								className={`rounded-lg p-2  shadow cursor-pointer  ${Display === 'add-post'
									? 'bg-light text-dark'
									: 'bg-dark text-white'}`}
							>
								<FontAwesomeIcon icon={faEdit} size="lg" />
							</span>
						</Link>
					</div>
				</div>

				{/* ---------------------------------------------------- Display ---------------------------------------------------- */}
				<div className="col-md-11 vh-100 " style={{ overflowY: 'scroll', paddingBottom: '100px' }}>
					{!Display || (Display === 'home' && <div>home</div>)}
					{Display === 'add-post' && <AddPost />}
				</div>
			</div>
		</div>
	);
};

export default withRouter(Dashboard);

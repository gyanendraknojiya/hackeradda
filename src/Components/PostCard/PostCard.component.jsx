import React from 'react';

import './PostCard.styles.css';
import My from '../../my.png';

const PostCard = () => {
	const text =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

	return (
		<div>
			<div className="PostCard p-2">
				<img
					src={
						'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRI--HMpobuBUpUkFz9_kwPvDOeGwjMEdf28A&usqp=CAU'
					}
					height="220px"
					className="bg-secondary"
					width="100%"
					style={{ objectFit: 'contain', borderRadius: '10px' }}
					alt="thumbnail"
				/>
				<div className="mx-2 mt-2 mb-0" style={{ fontSize: '15px' }}>
					{text.length > 60 ? text.slice(0, 60) + '...' : text}
				</div>
				<div className="text-muted ml-2 mt-0">
					<small>
						<b>Category: Technology</b>
					</small>
				</div>
				<div className="border my-2" />
				<div className="row mx-0">
					<div className="col p-0">
						<span className="btn btn-sm btn-light mx-auto ">Read</span>
					</div>
					<div className="col p-0" style={{ marginTop: '-8px', lineHeight: '.7rem' }}>
						<small className="text-center">
							<div role="img" aria-label="rating" className="text-center">
								⭐⭐⭐⭐⭐
							</div>
							<div className="text-muted text-center" style={{ fontSize: '11px' }}>
								{new Date().toDateString()}
							</div>
						</small>
					</div>
					<div className="col p-0">
						<img src={My} alt="UserPic" className="rounded-lg float-right" height="35px" width="35px" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostCard;

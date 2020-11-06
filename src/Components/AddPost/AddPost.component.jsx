import React, { useState } from 'react';

import './AddPost.styles.css';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddPost = () => {
	const [ EditorData, setEditorData ] = useState(null);

	return (
		<div className=" my-4 mx-md-5 mx-2">
			<div className="lead " style={{ fontSize: '22px' }}>
				Add new post
			</div>
			<div className="row mx-0 my-3">
				<div className="col-12 shadow rounded-lg ">
					<div className="form-group">
						<label>Post Title:</label>
						<input className="form-control " type="text" placeholder="Enter your post title" />
					</div>

					<div className="form-group">
						<label>Post Cover Image:</label>
						<input className="form-control-file " type="file" />
					</div>

					{/* <div className="form-group">
						<label>Post Thumbnail:</label>
						<input className="form-control-file " type="file" />
					</div> */}

					<div className="form-group">
						<label>Post Content:</label>
						<div className="text-dark">
							<CKEditor
								editor={ClassicEditor}
								data={EditorData}
								onInit={(editor) => {
									// You can store the "editor" and use when it is needed.
									console.log('Editor is ready to use!', editor);
								}}
								onChange={(event, editor) => {
									const data = editor.getData();
									setEditorData(data);
									console.log({ event, editor, data });
								}}
								onBlur={(event, editor) => {
									console.log('Blur.', editor);
								}}
								onFocus={(event, editor) => {
									console.log('Focus.', editor);
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddPost;

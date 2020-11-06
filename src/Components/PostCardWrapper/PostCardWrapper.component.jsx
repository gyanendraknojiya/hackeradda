import React from 'react'

import "./PostCardWrapper.styles.css"
import PostCard from "../PostCard/PostCard.component"

const PostCardWrapper = () => {

  return <>
    <div className="PostCardWrapper" >
      <div className="row mx-0">
        <div className=" col-lg-3 col-md-6 col-sm-12"> 
          <PostCard />
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12"> 
          <PostCard />
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12"> 
          <PostCard />
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12"> 
          <PostCard />
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12"> 
          <PostCard />
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12"> 
          <PostCard />
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12"> 
          <PostCard />
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12"> 
          <PostCard />
        </div>
      </div>
    </div>
  </>
}

export default PostCardWrapper;
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faBookOpen } from "@fortawesome/free-solid-svg-icons";

import "./Homepage.styles.css";
import Header from "../../Components/Header/Header.component";
import SearchBar from "../../Components/SearchBar/SearchBar.component";
import PostCardWrapper from "../../Components/PostCardWrapper/PostCardWrapper.component";
import AddPost from "../../Components/AddPost/AddPost.component"

const Homepage = () => {
  return (
      <div
        className="coustom-scrollbar homepage "
        style={{ height: "100vh", overflowY: "scroll" }}
      >
        <div>
          <Header />
        </div>
        <SearchBar />
        <PostCardWrapper />

      </div>
  );
};

export default Homepage;

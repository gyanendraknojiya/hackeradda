import React from 'react'

import "./SearchBar.styles.css"

const SearchBar = () => {
  return <>
    <div className="mx-4 my-2 searchBar d-flex">
      <div className="mr-2">
        <div className="input-group mb-2" >
          <div className="input-group-prepend">
            <div className="input-group-text border-0 text-light" style={{ backgroundColor: "#000" }}><i className="fas fa-search"></i></div>
          </div>
          <input type="text" className="form-control  form-control-sm" placeholder="Search here..." />
        </div>
      </div>
      <div className="ml-auto">
        <select style={{ backgroundColor: "#000" }} className="border-0 form-control form-control-sm text-white ">
          <option value="sort-by-time" defaultValue>Sort by time</option>
          <option value="sort-by-time" defaultValue>Sort by popularity</option>
        </select>

      </div>
      <div>

        {/* <div className="btn ml-3 btn-sm text-white" style={{ backgroundColor: "#000" }} ><i className="fas fa-filter"></i></div> */}
      </div>
    </div>

  </>
}

export default SearchBar;
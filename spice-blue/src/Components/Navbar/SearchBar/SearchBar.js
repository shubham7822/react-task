import React from 'react'
import { BiSearchAlt} from "react-icons/bi";
import "./SearchBar.css"
function SearchBar() {
    return (
        <div id="SearchBar">
            <input type="search"></input>
            <BiSearchAlt id="SearchIcon"/>
        </div>
    )
}

export default SearchBar

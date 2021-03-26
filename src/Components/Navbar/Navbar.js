import React from 'react'
import Avatar from 'react-avatar';
import "./Navbar.css"
import SearchBar from './SearchBar/SearchBar';


export const Navbar = () => {
    return (
        <div className="Navbar">
            <div id="Navbar__Status">
            <p>Hi User</p>
            <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} name="User" size="50" />
            <SearchBar/>
           </div>


        </div>
    )
}


export default Navbar;

import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = function(){
    

    return (
        <div  id ="navbar" className="navbar f l">
            <li> <Link to="/">Home >></Link>  </li>
            <li> <Link to="/chat">Chat >></Link></li>
            <li> Ask Issue </li>
        </div>
    )
}

export default Navbar;
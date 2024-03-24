import React from "react";
import "./Header.css"
import { FaHome, FaUserCircle  } from "react-icons/fa";
import logoNasa from '../../assets/NASA.jpeg'

export const Header = ()=>{
    return(
        <div className="container_header">
            
            <FaHome className= "icons_home"/>
            <img src={logoNasa}/>
            <FaUserCircle className='icons_user' />

        </div>
    )
}
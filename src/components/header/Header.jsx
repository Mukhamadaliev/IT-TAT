import React from 'react'
import './header.css'
import imglogo from './assets/logo.jpg'
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";


const Header = () => {
  return (
    <div>
      <header className='display'>
       <div className="logo-placeholder">
          <img src={imglogo} alt="Logo" />
        </div>
        <ul className='display flex-grow'>
            <li>
              <span>uz</span>
            </li>
            <li>
              <FaExpandArrowsAlt />
            </li>
            <li><FaRegQuestionCircle /></li>
            <li>
              <FaRegClock />
            </li>
            <li><FaRegBell /></li>
            <li>
              <FaUserAlt />

            </li>
        </ul>
      </header>
    </div>
  )
}

export default Header
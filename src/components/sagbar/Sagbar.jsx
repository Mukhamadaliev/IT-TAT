import React from 'react';
import { Link } from 'react-router-dom';
import { FaLayerGroup } from "react-icons/fa6";
import { BiDollarCircle } from "react-icons/bi";
import './sagbar.css';

const Sagbar = () => { // onOpenSalaryModal propini olib tashladik
  return (
    <div className="background-sagbar">
      <div className='div-sagbar-max'>
        <div className="div-sagbar-min">
          <ul>
            <li>
              <Link to="/dekabr" className="nav-link">
                <span className='font-size-40 icon'><FaLayerGroup /></span>
                <span>Dekabr 18:00</span>
              </Link>
            </li>
            <li>
              <Link to="/fevral" className="nav-link">
                <span className='font-size-40 icon'><FaLayerGroup /></span>
                <span>Frontend Fevral 14:00</span>
              </Link>
            </li>
            <li>
              <Link to="/mart" className="nav-link">
                <span className='font-size-40 icon'><FaLayerGroup /></span>
                <span>Frontend Mart 16:00</span>
              </Link>
            </li>
            <li>
              {/* "Ish haqi" linkini to'g'ridan-to'g'ri /ishhaqi yo'liga yo'naltiramiz */}
              <Link to="/ishhaqi" className="nav-link">
                <span className='font-size-40 icon'><BiDollarCircle /></span>
                <span className='ish-haqi'>Ish haqi</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sagbar;

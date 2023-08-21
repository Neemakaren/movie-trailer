import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='wrapper'>
        <div className="content">
            <img src="../../images/react-movie-logo.svg" alt="" className='logoImg'/>
            <img src="../../images/tmdb_logo.svg" alt="" className='tmdbLogo' />
        </div>
    </div>
  )
}

export default Header;

import React from 'react'
import './header.css'
import searchIcon from '../../assets/search.png'
import rightArrow from '../../assets/rightIcon.png'

const Header = ({setSearch}) => {

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  
  return (
    <header className='header'>
        <div className='header-path'>Home  
          <img className='header-arrow' src={rightArrow} alt="right arrow" />
           <div className="text-gray-400">Documents</div>
         </div>
        <div className="icon-detail">
            <h1 className='header-h1'> My Documents</h1>
            <div className='search-button'>
              <input  onChange={handleSearch} type="text" placeholder='Search Document' />
              <img className='search-icon' src={searchIcon} alt="search" />
            </div>
        </div>
    </header>
  )
}

export default Header
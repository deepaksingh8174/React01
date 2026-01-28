import React, { useState } from 'react';
import './header.css';
import searchIcon from '../../assets/search.png';
import rightArrow from '../../assets/rightIcon.png';
import { insertDocument } from '../../utils/util';


const Header = ({ setSearch }) => {
  const [AddButtonStatus, setAddButtonStatus] = useState(false);
  const [documentName, setDocumentName] = useState('');

  const handleDocument = (e) => {
    setDocumentName(e.target.value);
  };

  const handleAddButton = () => {
    setAddButtonStatus(!AddButtonStatus);
  };

  const handleSaveButton = () => {
     insertDocument(documentName);
    setAddButtonStatus(!AddButtonStatus);
    setDocumentName('');
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header className="header">
      <div className="header-path">
        Home
        <img className="header-arrow" src={rightArrow} alt="right arrow" />
        <div className="text-gray-400">Documents</div>
      </div>
      <div className="icon-detail">
        <h1 className="header-h1"> My Documents</h1>
        {AddButtonStatus ? (
          <div className="flex gap-[140px] w-100">
            <input
              onChange={handleDocument}
              className="w-full h-9 px-3 border-gray-300 rounded text-md shadow-sm outline-none"
              type="text"
              placeholder="Document Name"
            />
            <button
              disabled={!documentName.trim()}
              onClick={handleSaveButton}
              className={`w-[140px] h-[40px] bg-green-400 text-white font-medium text-sm rounded-md shadow transition ${
                !documentName.trim()
                  ? 'bg-gray-400 cursor-not-allowed opacity-60'
                  : 'bg-green-400 hover:bg-green-500'
              }`}
            >
              Save
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddButton}
            className="w-[140px] h-[40px] bg-blue-400 text-white font-medium text-sm rounded-md shadow hover:bg-blue-500"
          >
            + Add Document
          </button>
        )}
        <div className="search-button">
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Search Document"
          />
          <img className="search-icon" src={searchIcon} alt="search" />
        </div>
      </div>
    </header>
  );
};

export default Header;

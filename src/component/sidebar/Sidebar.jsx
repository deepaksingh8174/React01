import chatIcon from '../../assets/chat.png';
import documentIcon from '../../assets/document.png';
import helpIcon from '../../assets/help.png';
import homeIcon from '../../assets/home.png';
import logo from '../../assets/logo.png';
import neptuneLogo from '../../assets/neptuneLogo.png';
import phoneIcon from '../../assets/phone.png';
import settingIcon from '../../assets/setting.png';

import './sidebar.css';

const Sidebar = () => {
  return (
    <>
      <aside className="sideBar">
        <div className="logo">
          <img src={logo} alt="logo-image" />
        </div>

        <div className="user-section">
          <img src={neptuneLogo} alt="" />
          <div>
            <h4>Jessica Thompson</h4>
            <span>Primary User</span>
          </div>
        </div>
        <div className="below-section">
          <nav className="menu">
            <ul>
              <li className="menu-list-item">
                <img src={homeIcon} alt="home-icon" />
                <span>Home</span>
              </li>
              <li className="menu-list-item">
                <img src={documentIcon} alt="document-icon" />
                <span>Documents</span>
              </li>
              <li className="menu-list-item">
                <img src={chatIcon} alt="chat-icon" />
                <span>Chat With Neptune</span>
              </li>
              <li className="menu-list-item">
                <img src={helpIcon} alt="help-icon" />
                <span>Help</span>
              </li>
              <li className="menu-list-item">
                <img src={settingIcon} alt="setting-icon" />
                <span>Settings</span>
              </li>
            </ul>
          </nav>

          <div className="contact">
            <img src={phoneIcon} alt="phone-icon" />
            <h4 className="contact-heading">Having trouble?</h4>
            <p className="contact-paragraph">
              Feel free to contact us and we will always help you through the
              process.
            </p>
            <button className="contact-button">Contact us</button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

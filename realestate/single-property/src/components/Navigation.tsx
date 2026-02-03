import React from 'react';


const Navigation: React.FC = () => (
  <div className="de-flex-col header-col-mid">
    <ul id="mainmenu">
      <li>
        <a className="menu-item" href="/">Home</a>
      </li>
      <li><a className="menu-item" href="#section-facilities">Facilities</a></li>
      <li><a className="menu-item" href="#section-floorplan">Floorplan</a></li>
      <li><a className="menu-item" href="#section-gallery">Gallery</a></li>
      <li><a className="menu-item" href="#section-contact">Contact</a></li>
    </ul>
  </div>
);

export default Navigation;

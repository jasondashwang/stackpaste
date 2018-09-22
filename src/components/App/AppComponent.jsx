import React from 'react';

import NavbarContainer from '../Navbar/NavbarContainer';

const AppComponent = (props) => {
  return (
    <div className="appFrame">
      <div className="navbar">
        <NavbarContainer />
      </div>
    </div>
  );
};

export default AppComponent;

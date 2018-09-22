import React from 'react';

import SideMenuContainer from './SideMenuContainer';
import NavbarContainer from './NavbarContainer';
import WorkspaceContainer from './WorkspaceContainer';

const AppComponent = (props) => {
  return (
    <div className="appFrame">
      <div className="navbar">
        <NavbarContainer />
      </div>
      <div className="page">
        <div className="sidemenu">
          <SideMenuContainer />
        </div>
        <div className="workspace">
          <WorkspaceContainer />
        </div>
      </div>
    </div>
  );
};

export default AppComponent;

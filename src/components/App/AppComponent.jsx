import React from 'react';

import SideMenuContainer from '../SideMenu/SideMenuContainer';
import NavbarContainer from '../Navbar/NavbarContainer';
import WorkspaceContainer from '../Workspace/WorkspaceContainer';

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

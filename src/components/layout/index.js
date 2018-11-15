import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import './index.less';

@withRouter
class Layout extends React.Component {

    routeActive = (match, location) => {
      return !!match;
    }
    render() {
      return (
          <div>
            <ul className="nav">
              <li><NavLink to="/home" isActive={this.routeActive}>Home</NavLink></li>
              <li><NavLink to="/test" isActive={this.routeActive}>Test</NavLink></li>
            </ul>
            {
              this.props.children
            }
          </div>     
      );
    }
}

export default Layout;
import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Menu.scss';

const Menu = (props) => (
  <div className={`Menu ${props.layout ? 'Menu--' + props.layout : ''}`}>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Projects">Projects</Link></li>
      <li><Link to="/WorkWithMe">Work with Me</Link></li>
      <li><Link to="/Contact">Contact</Link></li>
    </ul>
  </div>
);

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;

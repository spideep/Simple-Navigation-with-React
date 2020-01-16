import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './Menu.scss';

const Menu = (props) => (
  <div className={`Menu ${props.layout ? 'Menu--' + props.layout : ''}`}>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/Projects">Projects</NavLink></li>
      <li><NavLink to="/WorkWithMe">Work with Me</NavLink></li>
      <li><NavLink to="/Contact">Contact</NavLink></li>
    </ul>
  </div>
);

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;

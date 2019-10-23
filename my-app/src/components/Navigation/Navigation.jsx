import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const activeStyle = {
  color: 'red',
};
const Navigation = () => (
  <ul className={styles.header}>
    <li>
      <NavLink to="/" className={styles.header__item} activeStyle={activeStyle}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/pets"
        className={styles.header__item}
        activeStyle={activeStyle}
      >
        Pets
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/about"
        className={styles.header__item}
        activeStyle={activeStyle}
      >
        About
      </NavLink>
    </li>
  </ul>
);

export default Navigation;

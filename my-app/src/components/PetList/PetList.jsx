import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styles from './PetList.module.css';

const PetList = ({ items = [], match }) => (
  <ul className={styles.petsUl}>
    {items.map(item => (
      <li key={item.id} className={styles.pets__list}>
        <img src={item.image} alt="pet" className={styles.pet__photo} />
        <Link to={`${match.path}/${item.id}`} className={styles.pets__item}>
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
);

PetList.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
  items: PropTypes.array.isRequired,
};

export default withRouter(PetList);

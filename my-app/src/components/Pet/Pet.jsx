import React from 'react';
import styles from './Pet.module.css';

const Pet = ({
  name,
  age,
  breed,
  gender,
  color,
  image,
  description,
  handleGoToBack,
}) => (
  <div className={styles.pet}>
    <button
      className={styles.pet__button}
      type="button"
      onClick={handleGoToBack}
    >
      &#8678; Return
    </button>
    <h1 className={styles.pet__title}>All about {name}</h1>
    <div className={styles.pet__block}>
      <img src={image} alt="pet" className={styles.pet__photo} />
      <div className={styles.pet__info}>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        <p>Color: {color}</p>
        <p>Breed: {breed}</p>
      </div>
    </div>
    <p className={styles.pet__text}>{description}</p>
  </div>
);
export default Pet;

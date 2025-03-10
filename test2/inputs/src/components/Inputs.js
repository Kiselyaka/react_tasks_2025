import React from 'react';
import styles from './Inputs.module.css';

const Inputs = () => (
  <>
    <input type="text" className={styles.input} placeholder="Input 1" />
    <input type="text" className={styles.input} placeholder="Input 2" />
    <input type="text" className={styles.input} placeholder="Input 3" />
  </>
);

export default Inputs;

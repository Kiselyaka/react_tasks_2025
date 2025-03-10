import React from 'react';
import styles from './Inputs.module.css';

const Inputs = () => {
  return (
    <div>
      <input className={styles.input1} placeholder="Input 1" />
      <input className={styles.input2} placeholder="Input 2" />
      <input className={styles.input3} placeholder="Input 3" />
    </div>
  );
};

export default Inputs;

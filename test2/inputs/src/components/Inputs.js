import React from 'react';
import styles from './Inputs.module.css';

function Inputs() {
  return (
    <div>
      <input type="text" className={styles.input} placeholder="Input 1" />
      <input type="text" className={styles.input} placeholder="Input 2" />
      <input type="text" className={styles.input} placeholder="Input 3" />
    </div>
  );
}

export default Inputs;

import React from 'react';

function Verdict({ temp }) {
  let verdict;
  if (temp < 0) {
    verdict = 'Вода твердая';
  } else if (temp >= 0 && temp <= 100) {
    verdict = 'Вода жидкая';
  } else {
    verdict = 'Вода газообразная';
  }

  return <p>{verdict}</p>;
}

export default Verdict;
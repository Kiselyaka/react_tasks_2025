import React, { memo } from 'react';

const Text = memo(() => {
  console.log('text render');
  return <p>long text</p>;
});

export default Text;
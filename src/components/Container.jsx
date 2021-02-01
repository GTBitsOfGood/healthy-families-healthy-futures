import React from 'react';

function Container({ children }) {
  return <div style={{ maxWidth: 1180, margin: '0 auto' }}>{children}</div>;
}

export default Container;

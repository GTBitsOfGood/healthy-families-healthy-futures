import React from 'react';

interface Props {
  children?: React.ReactChild | React.ReactChild[];
}

function Container({ children }: Props): JSX.Element {
  return <div style={{ maxWidth: 1180, margin: '0 auto' }}>{children}</div>;
}

export default Container;

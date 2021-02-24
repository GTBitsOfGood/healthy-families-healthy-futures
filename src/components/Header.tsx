import React from 'react';
import { Link } from 'gatsby';
function Header(): JSX.Element {
  return (
    <nav role="navigation">
      <img src="../img/logo.png" alt="Healthy Families Healthy Futures Logo"/>
      <button>
        <Link to="/donations/">DONATE</Link>
        </button>
    </nav>
  );
}

export default Header;

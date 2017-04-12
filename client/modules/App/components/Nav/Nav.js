import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './Nav.css';

export function Nav() {
  return (
    <div>
      <ul>
        <li className={styles.navitem}><Link to="/home">Home</Link></li>
        <li className={styles.navitem}><Link to="/">Posts</Link></li>
        <li className={styles.navitem}><Link to="/about">About</Link></li>
      </ul>
    </div>
  );
}

Nav.propTypes = {
};

export default Nav;

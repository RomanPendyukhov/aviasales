import React from 'react';

import logo from '../../assets/img/Logo.png';

import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} alt="logo" src={logo} />
    </div>
  );
}

export default Header;

import React from 'react';

import Filter from '../Filter';

import styles from './Sidebar.module.scss';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Filter />
    </div>
  );
}

export default Sidebar;

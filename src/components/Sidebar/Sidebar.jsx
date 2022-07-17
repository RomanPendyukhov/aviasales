import React from 'react';

import SidebarFilter from '../SidebarFilter';

import styles from './Sidebar.module.scss';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <SidebarFilter />
    </div>
  );
}

export default Sidebar;

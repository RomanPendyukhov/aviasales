import React from 'react';

import styles from './ErrorMsg.module.scss';

function ErrorMsg() {
  return <div className={styles.errorMsg}>ЧТО-ТО ПОШЛО НЕ ТАК. ПОПРОБУЙТЕ ПОЗЖЕ</div>;
}

export default ErrorMsg;

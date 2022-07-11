import React from 'react';
import PropTypes from 'prop-types';

import enumeration from '../../utilites/enumeration';
import { getArrivalTime, getDepartureTime, getTravelTime } from '../../utilites/dateUtility';

import styles from './Ticket.module.scss';

function Ticket({ price, carrier, segments }) {
  const priceStr = String(price).replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
  return (
    <div className={styles.ticket}>
      <div className={styles.price_logo}>
        <div className={styles.price}> {`${priceStr} \u20bd`} </div>
        <img className={styles.logo} alt="logo" src={`//pics.avs.io/99/36/${carrier}.png`} />
      </div>
      {segments.map((item) => (
        <div className={styles.information} key={item.date}>
          <div className={`${styles.text} ${styles.gray_text}`}>
            {item.origin}-{item.destination}
          </div>
          <div className={`${styles.text} ${styles.gray_text}`}>В ПУТИ</div>
          <div className={`${styles.text} ${styles.gray_text}`}>
            {item.stops.length} {enumeration(item.stops.length)}
          </div>
          <div className={styles.text}>
            {getDepartureTime(item.date)} - {getArrivalTime(item.date, item.duration)}
          </div>
          <div className={styles.text}> {getTravelTime(item.duration)}</div>
          <div className={styles.text}> {item.stops.join(', ')}</div>
        </div>
      ))}
    </div>
  );
}

export default Ticket;

Ticket.defaultProps = {
  price: 0,
  carrier: '',
  segments: [],
};
Ticket.propTypes = {
  price: PropTypes.number,
  carrier: PropTypes.string,
  segments: PropTypes.instanceOf(Array),
};

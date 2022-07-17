import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showMoreTicket } from '../../store/slices/ticketsSlice';
import Ticket from '../Ticket';
import WarningMsg from '../WarningMsg';
import filterTicketByTransfer from '../../utilites/filterTicketByTransfer';
import uniqueKey from '../../utilites/uniqueKey';
import getTicketsBySorting from '../../utilites/getTicketsBySorting';

import styles from './TicketList.module.scss';

function TicketList() {
  const tickets = useSelector((state) => state.tickets.tickets);
  const numShowTicket = useSelector((state) => state.tickets.numShowTicket);
  const showAllTickets = useSelector((state) => state.filters.showAllTickets);
  const valueFilterTransfer = useSelector((state) => state.filters.valueFilterTransfer);
  const error = useSelector((state) => state.tickets.error);
  const isLoading = useSelector((state) => state.tickets.isLoading);
  const sortingType = useSelector((state) => state.filters.sortType);

  const dispatch = useDispatch();

  const ticketsFilter = tickets.filter((item) => filterTicketByTransfer(item, showAllTickets, valueFilterTransfer));
  const sortedTickets = getTicketsBySorting(ticketsFilter, sortingType);
  return (
    <div className={styles.ticket_list}>
      {sortedTickets.slice(0, numShowTicket).map((ticket) => (
        <Ticket key={uniqueKey()} {...ticket} />
      ))}
      {ticketsFilter.length === 0 && !error && !isLoading && <WarningMsg />}
      {ticketsFilter.length > numShowTicket && (
        <button type="button" className={styles.button} onClick={() => dispatch(showMoreTicket())}>
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ
        </button>
      )}
    </div>
  );
}

export default TicketList;

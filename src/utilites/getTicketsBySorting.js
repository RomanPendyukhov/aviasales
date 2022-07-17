import getTotalFlyDuration from './getTotalFlyDuration';

export default function getTicketsBySorting(tickets, sortType) {
  switch (sortType) {
    case 'cheap':
      return tickets.sort((previous, next) => (previous.price > next.price ? 1 : -1));
    case 'fast':
      return tickets.sort((previous, next) => (getTotalFlyDuration(previous) > getTotalFlyDuration(next) ? 1 : -1));
    case 'optimal':
      tickets.sort((previous, next) =>
        getTotalFlyDuration(previous) + previous.price > getTotalFlyDuration(next) + next.price ? 1 : -1
      );
    // eslint-disable-next-line no-fallthrough
    default:
      return tickets;
  }
}

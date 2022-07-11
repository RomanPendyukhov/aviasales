const enumeration = (num) => {
  switch (num) {
    case 1:
      return 'ПЕРЕСАДКА';
    case 2:
    case 3:
    case 4:
      return 'ПЕРЕСАДКИ';
    default:
      return 'ПЕРЕСАДОК';
  }
};

export default enumeration;

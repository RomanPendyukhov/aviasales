import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setValueFilterTicket, switchFilterAll } from '../../store/slices/filtersSlice';

import styles from './SidebarFilter.module.scss';

function SidebarFilter() {
  const [checkedAllTicket, setCheckedAllTicket] = useState(true);
  const [checkedZero, setCheckedZero] = useState(true);
  const [checkedOne, setCheckedOne] = useState(true);
  const [checkedTwo, setCheckedTwo] = useState(true);
  const [checkedThree, setCheckedThree] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (checkedZero && checkedOne && checkedTwo && checkedThree) {
      setCheckedAllTicket(true);
    } else {
      setCheckedAllTicket(false);
    }
  }, [checkedZero, checkedOne, checkedTwo, checkedThree]);

  useEffect(() => {
    dispatch(switchFilterAll(checkedAllTicket));
  }, [dispatch, checkedAllTicket]);

  useEffect(() => {
    dispatch(setValueFilterTicket({ isChecked: checkedZero, filterValue: 0 }));
  }, [checkedZero, dispatch]);

  useEffect(() => {
    dispatch(setValueFilterTicket({ isChecked: checkedOne, filterValue: 1 }));
  }, [checkedOne, dispatch]);

  useEffect(() => {
    dispatch(setValueFilterTicket({ isChecked: checkedTwo, filterValue: 2 }));
  }, [checkedTwo, dispatch]);

  useEffect(() => {
    dispatch(setValueFilterTicket({ isChecked: checkedThree, filterValue: 3 }));
  }, [checkedThree, dispatch]);

  const handleCheckboxChange = (event) => {
    switch (event.target.name) {
      case 'Zero':
        setCheckedZero(event.target.checked);
        break;
      case 'One':
        setCheckedOne(event.target.checked);

        break;
      case 'Two':
        setCheckedTwo(event.target.checked);

        break;
      case 'Three':
        setCheckedThree(event.target.checked);

        break;
      default:
        setCheckedAllTicket(event.target.checked);
        setCheckedZero(event.target.checked);
        setCheckedOne(event.target.checked);
        setCheckedTwo(event.target.checked);
        setCheckedThree(event.target.checked);
    }
  };

  const filters = [
    {
      label: 'Все',
      id: 'all',
      name: 'All',
      checked: checkedAllTicket,
      htmlFor: 'all',
    },
    {
      label: 'Без пересадок',
      id: 'Zero_transfers',
      name: 'Zero',
      checked: checkedZero,
      htmlFor: 'Zero_transfers',
    },
    {
      label: 'Одна пересадка',
      id: 'One_transfer',
      name: 'One',
      checked: checkedOne,
      htmlFor: 'One_transfer',
    },
    {
      label: 'Две пересадки',
      id: 'Two_transfer',
      name: 'Two',
      checked: checkedTwo,
      htmlFor: 'Two_transfer',
    },
    {
      label: 'Три пересадки',
      id: 'Three_transfer',
      name: 'Three',
      checked: checkedThree,
      htmlFor: 'Three_transfer',
    },
  ];

  return (
    <div className={styles.filter}>
      <div className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      {filters.map((el) => {
        return (
          <div className={styles.wrapper}>
            <input
              type="checkbox"
              id={el.id}
              name={el.name}
              className={styles.checkbox}
              checked={el.checked}
              onChange={(event) => handleCheckboxChange(event)}
            />
            <label className={styles.label} htmlFor={el.htmlFor}>
              {el.label}
            </label>
          </div>
        );
      })}
    </div>
  );
}
export default SidebarFilter;

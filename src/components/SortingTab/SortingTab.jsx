import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';

import { sortTicketByPrice, sortTicketByDuration, sortTicketOptimal } from '../../store/slices/filtersSlice';

import styles from './SortingTab.module.scss';

function SortingTab() {
  const dispatch = useDispatch();

  const [select, setSelect] = useState({
    cheapSelect: true,
    fastSelect: false,
    optimalSelect: false,
  });

  const cx = classNames.bind(styles);

  const sortingTabs = [
    {
      className: cx({
        tab: true,
        select: select.cheapSelect,
      }),

      onClick: () => {
        dispatch(sortTicketByPrice('cheap'));
        setSelect({
          cheapSelect: true,
          fastSelect: false,
          optimalSelect: false,
        });
      },
      label: 'САМЫЙ ДЕШЕВЫЙ',
    },
    {
      className: cx({
        tab: true,
        select: select.fastSelect,
      }),

      onClick: () => {
        dispatch(sortTicketByDuration('fast'));
        setSelect({
          cheapSelect: false,
          fastSelect: true,
          optimalSelect: false,
        });
      },
      label: 'САМЫЙ БЫСТРЫЙ',
    },
    {
      className: cx({
        tab: true,
        select: select.optimalSelect,
      }),

      onClick: () => {
        dispatch(sortTicketOptimal('optimal'));
        setSelect({
          cheapSelect: false,
          fastSelect: false,
          optimalSelect: true,
        });
      },
      label: 'ОПТИМАЛЬНЫЙ',
    },
  ];

  return (
    <div className={styles.tabs}>
      {sortingTabs.map((el) => {
        return (
          <div role="presentation" className={el.className} key={el.label} onClick={el.onClick}>
            <span>{el.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export default SortingTab;

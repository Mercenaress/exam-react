import React from 'react';
import styles from './Swiper.module.css';
import { useState } from 'react';

function Swiper() {
  const [currentPage, setCurrentPage] = useState(2);
  let maxPages = 3;
  let items = [];
  let leftSide = currentPage - 2;
  if (leftSide <= 0) leftSide = 1;
  let rightSide = currentPage + 2;
  if (rightSide > maxPages) rightSide = maxPages;
  for (let number = leftSide; number <= rightSide; number++) {
    items.push(
      <div
        key={number}
        className={
          number === currentPage
            ? `${styles.roundEffect} ${styles.active}`
            : `${styles.roundEffect}`
        }
        onClick={() => {
          setCurrentPage(number);
        }}
      >
        {number}
      </div>
    );
  }
  const nextPage = () => {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const paginationRender = (
    <div className={styles.flexContainer}>
      <div className={styles.paginateCtn}>
        <div className={styles.roundEffect} onClick={prevPage}>
          {' '}
          &lsaquo;{' '}
        </div>
        {items}
        <div className={styles.roundEffect} onClick={nextPage}>
          {' '}
          &rsaquo;{' '}
        </div>
      </div>
    </div>
  );
  return paginationRender;
}

export default Swiper;

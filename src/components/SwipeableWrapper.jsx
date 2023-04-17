import React from 'react';
import { useSwipeable } from 'react-swipeable';

const SwipeableWrapper = ({ children, onSwipedLeft, onSwipedRight }) => {
  const swipeHandlers = useSwipeable({
    onSwipedLeft,
    onSwipedRight,
  });
  return <div {...swipeHandlers}>{children}</div>;
};

export default SwipeableWrapper;

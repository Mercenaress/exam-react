import { createContext, useState, useContext } from 'react';
import { DataContext } from './DataContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { setPurchasedTickets, purchasedTickets } =
    useContext(DataContext);
  const [cartTickets, setCartTickets] = useState([]);

  // Lägga till en ny ticket till cart med kontroll om det redan finns en ticket med samma ID.
  const addTicketToCart = (item, quantity) => {
    const existingItem = cartTickets.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      setCartTickets(
        cartTickets.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...existingItem,
                quantity: existingItem.quantity + quantity,
              }
            : cartItem
        )
      );
    } else {
      setCartTickets([...cartTickets, { ...item, quantity: quantity }]);
    }
  };

  const removeTicketFromCart = (ticketId) => {
    setCartTickets(
      cartTickets.filter((cartItem) => cartItem.id !== ticketId)
    );
  };

  const updateTicketQuantity = (itemId, newQuantity) => {
    setCartTickets(
      cartTickets.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: newQuantity }
          : cartItem
      )
    );
  };

  const submitOrder = () => {
    setPurchasedTickets((prevTickets) => {
      // Letar efter och uppdaterar ticket quantity om det finns sen tidigare
      const updatedTickets = cartTickets.map((cartTicket) => {
        const existingTicket = prevTickets.find(
          (prevTicket) => prevTicket.id === cartTicket.id
        );

        if (existingTicket) {
          return {
            ...existingTicket,
            quantity: existingTicket.quantity + cartTicket.quantity,
          };
        } else {
          return cartTicket;
        }
      });

      const mergedTickets = [
        ...prevTickets.filter(
          (prevTicket) =>
            !updatedTickets.find(
              (updatedTicket) => updatedTicket.id === prevTicket.id
            )
        ),
        ...updatedTickets,
      ];

      setCartTickets([]);
      return mergedTickets;
    });
  };

  const cartTotal = cartTickets.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartTickets,
        addTicketToCart,
        updateTicketQuantity,
        removeTicketFromCart,
        submitOrder,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

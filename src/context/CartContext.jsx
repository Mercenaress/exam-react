import { createContext, useState, useContext } from 'react';
import { DataContext } from './DataContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { setPurchasedTickets, purchasedTickets } =
    useContext(DataContext);
  const [cartTickets, setCartTickets] = useState([]);

  // Add a new ticket to the cart, checking if there's already a ticket with the same ID.
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

  // Remove a ticket from the cart by ID.
  const removeTicketFromCart = (ticketId) => {
    setCartTickets(
      cartTickets.filter((cartItem) => cartItem.id !== ticketId)
    );
  };

  // Update the quantity of a ticket in the cart by ID.
  const updateTicketQuantity = (itemId, newQuantity) => {
    setCartTickets(
      cartTickets.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: newQuantity }
          : cartItem
      )
    );
  };

  // Submit the order, updating purchased tickets.
  const submitOrder = () => {
    setPurchasedTickets((prevTickets) => {
      // Find and update ticket quantity if it already exists.
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

      // Combines the existing purchased tickets (prevTickets) with the updated tickets (updatedTickets)
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

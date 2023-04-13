import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [purchasedTickets, setPurchasedTickets] = useState([]);
  const [cartTickets, setCartTickets] = useState([
    {
      name: 'Lasse-Stefanz',
      price: 400,
      where: 'Avicii arena',
      when: {
        date: '21 Mar',
        from: '20.00',
        to: '22:00',
      },
      quantity: 1,
      id: 1,
    },
    {
      name: 'Pelle Trubaddur',
      price: 300,
      where: 'Avicii arena',
      when: {
        date: '29 Mar',
        from: '20.00',
        to: '22:00',
      },
      quantity: 5,
      id: 2,
    },
    {
      name: 'Klubb Untz',
      price: 300,
      where: 'Avicii arena',
      when: {
        date: '29 Mar',
        from: '20.00',
        to: '22:00',
      },
      quantity: 4,
      id: 3,
    },
    {
      name: 'Klubb Untz 2',
      price: 300,
      where: 'Avicii arena',
      when: {
        date: '59 Mar',
        from: '24.00',
        to: '02:00',
      },
      quantity: 1,
      id: 4,
    },
  ]);

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
      // Letar efter och uppdaterar tickets om det finns sen tidigare
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
      setCartTickets([]);
      return updatedTickets;
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

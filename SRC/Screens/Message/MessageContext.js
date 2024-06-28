// MessageContext.js
import React, { createContext, useContext, useReducer } from 'react';

const MessageContext = createContext();

const messageReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...state, action.payload];
    default:
      return state;
  }
};

export const MessageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(messageReducer, []);

  return (
    <MessageContext.Provider value={{ messages: state, dispatch }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessages = () => useContext(MessageContext);

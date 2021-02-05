import React, { createContext, useContext, useReducer } from 'react';

// SetsUp the variable to export data globally
export const StateContext = createContext();

//Wrap our app with state that will be passed down to all of the children, all pages can come and get some
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

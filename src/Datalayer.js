import React ,{ createContext, useContext, useReducer } from 'react';
//creating the base of datalayer
export const DataLayerContext = createContext();



export const DataLayer = ({ initialState, reducer, children}) => (
  <DataLayerContext.Provider  value={useReducer(reducer, initialState)}>
    
        {children}
    </DataLayerContext.Provider>
  
 );

//for get data from the data layer
 export const useDataLayerValue = () => useContext(DataLayerContext);
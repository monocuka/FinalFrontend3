import React, { createContext, useContext, useEffect } from 'react';
import { useReducerHook, ADD_FAVORITES, TOGGLE_THEME } from '../Components/utils/useReducerHook';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch, fetchDataDetail] = useReducerHook();

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
        dispatch({ type: ADD_FAVORITES, payload: JSON.parse(storedFavorites) });
        }
    }, []);

    return (
        <AppContext.Provider value={{ state, dispatch, fetchDataDetail }}>
        {children}
        </AppContext.Provider>
    );
    };

    const useAppContext = () => {
    return useContext(AppContext);
    
};

export { AppProvider, useAppContext };

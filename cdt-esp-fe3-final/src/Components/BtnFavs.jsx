


import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext'
import { ADD_FAVORITES, REMOVE_FAVORITES } from '../Components/utils/useReducerHook'
import Card from "./Card";
import'../css/styles.css';



const ButtonFav = ({ dentist: { id, name } }) => {
    const { state, dispatch } = useAppContext();
    const isFavInGlobalState = state.favorites.some((fav) => fav.id === id);
    const [isFav, setIsFav] = useState(isFavInGlobalState);

    useEffect(() => {
        setIsFav(isFavInGlobalState);
        }, [isFavInGlobalState]);
    
        return (
        <button
            onClick={() =>
            isFav
                ? dispatch({ type: REMOVE_FAVORITES, payload: id })
                : dispatch({ type: ADD_FAVORITES, payload: { id, name } })
            }
            className="circle-button fav"
        >
            {isFav ? " ★" : "🌟"}
        </button>
        );
};

export default ButtonFav;

import { useEffect, useReducer } from "react";

const TOGGLE_THEME = "TOGGLE_THEME";
const DATA_DENTISTS = "DATA_DENTISTS";
const ADD_FAVORITES = "ADD_FAVORITES";
const REMOVE_FAVORITES = "REMOVE_FAVORITES";
const DATA_DENTIST = "DATA_DENTIST";

const initialState = {
    theme: "light",
    dentist: {},
    dentists: [],
    favorites: [],
};

const clearLocalStorage = () => {
    localStorage.removeItem("favorites");
};

const updateFavoritesLocalStorage = (favorites) => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
};

const handleAddFavorites = (state, action) => {
    const { payload: dentistFav } = action;
    const isAlreadyFavorited = state.favorites.some((fav) => fav.id === dentistFav.id);

    if (!isAlreadyFavorited) {
        const updatedFavs = [...state.favorites, dentistFav];
        updateFavoritesLocalStorage(updatedFavs);
        return { ...state, favorites: updatedFavs };
    } else {
        return state;
    }
};

const handleRemoveFavorites = (state, action) => {
    const { payload: dentistToRemove } = action;
    const updatedFavorites = state.favorites.filter((fav) => fav && fav.id !== dentistToRemove);
    updateFavoritesLocalStorage(updatedFavorites);
    return { ...state, favorites: updatedFavorites };
    };

const reducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
        return {
            ...state,
            theme: state.theme === "light" ? "dark" : "light",
        };
        case DATA_DENTISTS:
        return {
            ...state,
            dentists: action.payload,
        };
        case DATA_DENTIST:
        return {
            ...state,
            dentist: action.payload,
        };
        case ADD_FAVORITES:
        return handleAddFavorites(state, action);
        case REMOVE_FAVORITES:
        return handleRemoveFavorites(state, action);
        default:
        return state;
    }
};

const useReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        clearLocalStorage();

        const fetchData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            dispatch({ type: DATA_DENTISTS, payload: data });
        } catch (error) {
            console.log("Error al obtener los datos: ", error);
        }
        };

        fetchData();
    }, []);

    const fetchDataDetail = async (dentistId) => {
            try {
            const dentistDetailResponse = await fetch(
                `https://jsonplaceholder.typicode.com/users/${dentistId}`
            );
            const detailData = await dentistDetailResponse.json();
            dispatch({ type: DATA_DENTIST, payload: detailData });
            } catch (error) {
            console.log("Error al obtener detalles del dentista: ", error);
            }
        };

        return [state, dispatch, fetchDataDetail];
};

export {
    useReducerHook,
    TOGGLE_THEME,
    ADD_FAVORITES,
    REMOVE_FAVORITES,
    DATA_DENTIST,
};

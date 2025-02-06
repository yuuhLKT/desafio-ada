import PropTypes from 'prop-types';
import { createContext, useContext, useEffect, useState } from 'react';

const FAVORITES_KEY = 'accommodationFavorites';
const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem(FAVORITES_KEY);
        return saved ? JSON.parse(saved) : {};
    });

    useEffect(() => {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }, [favorites]);

    const handleFavorite = (id) => {
        setFavorites((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, handleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}
FavoritesProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useFavorites = () => useContext(FavoritesContext);

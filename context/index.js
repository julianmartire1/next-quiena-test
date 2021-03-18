import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAllMovies } from '../services/moviesServices';

//Context
export const AppContext = createContext(null);

//Provider
export const AppContextProvider = ({ children }) => {
  const [state, setState] = useState({});
  const [page, setPageState] = useState(1);
  const [favorites, setfavoritesState] = useState([]);

  useEffect(async () => {
    const result = await getAllMovies(page);

    setState((prev) => ({ ...prev, movies: result.results }));
  }, []);

  useEffect(async () => {
    const result = await getAllMovies(page);

    setState((prev) => ({ ...prev, movies: result.results }));
  }, [page]);

  return (
    <AppContext.Provider
      value={{
        state,
        page,
        favorites,

        setState,
        setPageState,
        setfavoritesState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    console.error('Error deploying App Context!!!');
  }

  return context;
}

export default useAppContext;

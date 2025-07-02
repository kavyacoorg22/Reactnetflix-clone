
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext"; 

const MovieContext = createContext();

export const MyListProvider = ({ children }) => {
  const { auth } = useAuth(); 
  const [userLists, setUserLists] = useState({}); 

  const currentEmail = auth?.user?.email;

  // Get movies for current user
  const mylist = currentEmail ? userLists[currentEmail] || [] : [];

  const addMovie = (movie) => {

    if (!currentEmail) return;

    setUserLists((prev) => {
      const existing = prev[currentEmail] || [];
      
      const alreadyExists = existing.some((m) => m.id === movie.id);
      if (alreadyExists) return prev;
      return {
        ...prev,
        [currentEmail]: [...existing, movie],
      };
    });
  };

  const removeMovie = (movieId) => {
    if (!currentEmail) return;
    setUserLists((prev) => ({
      ...prev,
      [currentEmail]: prev[currentEmail]?.filter((m) => m.id !== movieId) || [],
    }));
  };

  return (
    <MovieContext.Provider value={{ mylist, addMovie, removeMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useSavedMovies = () => useContext(MovieContext);

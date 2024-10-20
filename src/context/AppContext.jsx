import { useState, createContext, useEffect } from 'react';
import { useToken } from '../hooks';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const rememberMe = JSON.parse(localStorage.getItem('rememberMe') || 'false');

  const setRememberMe = (rememberMe) => {
    localStorage.setItem('rememberMe', JSON.stringify(rememberMe));
  };

  const { isTokenValid, hasToken, getUserDataFromToken, clearToken } =
    useToken();

  const [user, setUser] = useState(() => getUserDataFromToken());

  useEffect(() => {
    const checkToken = () => {
      if (!hasToken()) return;

      if (!isTokenValid()) clearToken();
    };

    checkToken();
  }, []);

  const contextValue = { rememberMe, setRememberMe, user, setUser };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

import { jwtDecode } from 'jwt-decode';

export default function useToken() {
  const rememberMe = JSON.parse(localStorage.getItem('rememberMe') || 'false');

  const getToken = () => {
    return rememberMe
      ? localStorage.getItem('token')
      : sessionStorage.getItem('token');
  };

  const setToken = (token) => {
    rememberMe
      ? localStorage.setItem('token', token)
      : sessionStorage.setItem('token', token);

    localStorage.setItem('rememberMe', JSON.stringify(rememberMe));
  };

  const isTokenValid = () => {
    const token = getToken();

    try {
      if (!token) throw new Error('Token no encontrado');

      const { exp } = jwtDecode(token);

      if (exp < Date.now() / 1000) throw new Error('Token expirado');

      return true;
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      return false;
    }
  };

  const getUserDataFromToken = () => {
    const token = getToken();

    try {
      if (!token) throw new Error('Token no encontrado');

      const decodedToken = jwtDecode(token);

      if (!decodedToken.user)
        throw new Error('Datos de usuario no encontrados en el token');

      return jwtDecode(token).user;
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      return undefined;
    }
  };

  const clearToken = () => {
    rememberMe
      ? localStorage.removeItem('token')
      : sessionStorage.removeItem('token');

    localStorage.removeItem('rememberMe');
  };

  const hasToken = () => {
    return !!getToken();
  };

  return {
    getToken,
    setToken,
    isTokenValid,
    getUserDataFromToken,
    clearToken,
    hasToken,
  };
}

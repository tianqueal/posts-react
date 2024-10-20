import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './Layout.css';

import { useApp, useToken } from '../hooks';

export default function Layout() {
  const { user, setUser } = useApp();
  const { getUserDataFromToken, clearToken } = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    setUser(getUserDataFromToken());
  }, []);

  const handleLogout = () => {
    setUser(undefined);
    clearToken();
    navigate('/');
  };

  return (
    <>
      <header className="layout-header">
        <h1>Gestor de posts</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/posts">Posts</Link>
                </li>
                <li>
                  <a
                    className="logout-option"
                    role="button"
                    onClick={handleLogout}
                  >
                    Cerrar sesión
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Iniciar sesión</Link>
                </li>
                <li>
                  <Link to="/register">Registrarse</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <main className="layout-main">
        <Outlet />
      </main>
      <footer className="layout-footer">
        <p>MIT License {new Date().getFullYear()}, Christian A.</p>
      </footer>
    </>
  );
}

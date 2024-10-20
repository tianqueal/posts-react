import { useNavigate } from 'react-router-dom';
import FormLogin from '../components/FormLogin';
import './Login.css';

import { useApp, useNotAuthGuard, useToken, useAuth } from '../hooks';

export default function Login() {
  useNotAuthGuard();

  const { setRememberMe, setUser } = useApp();
  const { login } = useAuth();
  const { setToken, getUserDataFromToken } = useToken();
  const navigate = useNavigate();

  const handleOnLogin = async ({ email, password, rememberMe }) => {
    try {
      const { token } = await login({ email, password });

      setRememberMe(rememberMe);
      setToken(token);
      setUser(getUserDataFromToken());

      navigate('/');
    } catch (error) {
      alert(`Error ${error.status}: ${error.statusText}`);
    }
  };

  return (
    <section className="login-container">
      <h2>Iniciar sesión</h2>
      <FormLogin onLogin={handleOnLogin} />
    </section>
  );
}

import { useState } from 'react';
import './AuthForm.css';
import Button from './Button';

export default function FormLogin({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password, rememberMe });
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <article>
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </article>
      <article>
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </article>
      <article>
        <label htmlFor="remember-me">Recuérdame</label>
        <input
          type="checkbox"
          name="remember-me"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
      </article>
      <Button type="submit" color="secondary">
        Iniciar sesión
      </Button>
    </form>
  );
}

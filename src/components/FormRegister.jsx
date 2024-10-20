import { useState } from 'react';
import './AuthForm.css';
import Button from './Button';

export default function FormRegister({ onRegister }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert('Las contraseñas no coinciden');
    }

    onRegister({ name, email, password });
  };
  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <article>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </article>
      <article>
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          name="email"
          placeholder="Ingrese su correo electrónico"
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
        <label htmlFor="confirm-password">Confirmar contraseña</label>
        <input
          type="confirm-password"
          name="confirm-password"
          placeholder="Confirma tu contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </article>
      <Button type="submit" color="secondary">
        Registrarse
      </Button>
    </form>
  );
}

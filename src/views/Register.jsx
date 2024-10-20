import { useState } from 'react';
import FormRegister from '../components/FormRegister';
import RegistrationSuccess from '../components/RegistrationSuccess';
import './Register.css';

import { useAuth, useNotAuthGuard } from '../hooks';

export default function Register() {
  useNotAuthGuard();

  const { register } = useAuth();
  const [user, setUser] = useState(undefined);

  const handleOnRegister = async ({ name, email, password }) => {
    try {
      const newUser = await register({ name, email, password });
      setUser(newUser);
    } catch (error) {
      alert(`Error ${error.status}: ${error.statusText}`);
    }
  };

  return (
    <section className="register-container">
      <h2>Registrarse</h2>
      {user ? (
        <RegistrationSuccess newUser={user} />
      ) : (
        <FormRegister onRegister={handleOnRegister} />
      )}
    </section>
  );
}

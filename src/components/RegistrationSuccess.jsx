import { useNavigate } from 'react-router-dom';
import './RegistrationSuccess.css';
import Button from './Button';

export default function RegistrationSuccess({ newUser }) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/login');
  };
  return (
    <section className="registration-success-container">
      <h3>¡Bienvenido, {newUser.name}!</h3>
      <p>Gracias por registrarte en la plataforma.</p>
      <Button type="button" color="outline" handleClick={handleOnClick}>
        Iniciar sesión
      </Button>
    </section>
  );
}

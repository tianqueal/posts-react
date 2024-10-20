import { useApp } from '../hooks';
import './Home.css';

export default function Home() {
  const { user } = useApp();

  return (
    <section className="home-container">
      <h2>Página principal</h2>
      <p>{user ? `Bienvenido, ${user.name} :D` : 'Sesión no iniciada :('}</p>
    </section>
  );
}

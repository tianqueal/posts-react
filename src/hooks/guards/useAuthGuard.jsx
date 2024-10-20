import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../hooks';

export default function useAuthGuard() {
  const { user } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) navigate('/login');
  }, []);
}

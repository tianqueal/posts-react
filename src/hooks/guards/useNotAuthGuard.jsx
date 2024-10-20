import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../hooks';

export default function useNotAuthGuard() {
  const { user } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) navigate('/');
  }, [user?.email]);
}

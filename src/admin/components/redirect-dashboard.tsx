import { useEffect } from 'react';
import { useNavigate } from 'react-router';

function RedirectDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/admin/resources/Produtos'); // <- substitua pelo seu resource ID se for diferente
  }, [navigate]);

  return null;
}

export default RedirectDashboard;

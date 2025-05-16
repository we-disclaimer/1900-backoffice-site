import { useEffect } from 'react';
import { useNavigate } from 'react-router';
function RedirectDashboard() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/admin/resources/Produtos');
    }, [navigate]);
    return null;
}
export default RedirectDashboard;
//# sourceMappingURL=redirect-dashboard.js.map
import useAuth from '../Hooks/useAuth';
import Forbidden from '../Components/Forbidden/Forbidden';
import UseRole from '../Hooks/UseRole';
import Loading from '../Components/Loading/Loading';

const AdminRoute = ({ children }) => {
    const { loading } = useAuth();
    const { role, roleLoading } = UseRole()

    if (loading || roleLoading) {
        return <Loading></Loading>
    }

    if (role !== 'admin') {
        return <Forbidden></Forbidden>
    }

    return children;
};

export default AdminRoute;
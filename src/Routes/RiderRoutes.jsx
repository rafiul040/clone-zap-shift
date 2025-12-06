import Forbidden from '../Components/Forbidden/Forbidden';
import UseRole from '../Hooks/UseRole';
import Loading from '../Components/Loading/Loading';
import useAuth from '../Hooks/useAuth';

const RiderRoutes = ({ children }) => {
    const { loading } = useAuth();
    const { role, roleLoading } = UseRole()

    if (loading || roleLoading) {
        return <Loading></Loading>
    }

    if (role !== 'rider') {
        return <Forbidden></Forbidden>
    }

    return children;
};

export default RiderRoutes;
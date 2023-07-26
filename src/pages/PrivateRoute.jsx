import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const { userInfo } = useSelector((store) => store.user);
  if (!userInfo) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PrivateRoute;

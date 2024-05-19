
import { useSelector } from "react-redux";
import { currentUser } from "../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = useSelector(currentUser);
  if (!user) {
    return <Navigate to={"/login"} replace={true}></Navigate>;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;

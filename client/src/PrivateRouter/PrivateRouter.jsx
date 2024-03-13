/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation()
  if (user) {
    return children;
  }
  return <Navigate to="/signIn" state={{ from: location }} replace />;
};
export default PrivateRouter;
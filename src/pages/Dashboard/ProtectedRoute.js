import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SharedLayout from "./SharedLayout";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user);
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return <SharedLayout />;
};
export default ProtectedRoute;

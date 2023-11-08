import { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import { Navigate } from "react-router-dom";

export default function AdminRoute({ element }: { element: React.ReactNode }) {
  const authData = useContext(AuthContext);
  return authData?.isAuthenticated ? element : <Navigate to="/login" />;
}

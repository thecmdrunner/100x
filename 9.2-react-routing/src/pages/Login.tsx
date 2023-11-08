import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth";
import { useContext } from "react";

function LoginPage() {
  const setIsAuthenticated = useContext(AuthContext)!.setIsAuthenticated;

  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/dashboard");
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-white  ">
        <div className="bg-slate-300 p-10 rounded shadow-md">
          <h1 className="text-3xl font-semibold mb-4 text-gray-800">
            Please Log In
          </h1>

          <small>👀 Who are you?</small>

          <input
            className="border border-gray-400 p-2 mb-4 w-full"
            placeholder="Username"
            value="admin"
            onChange={() => {}}
          />

          <button
            onClick={handleLogin}
            className="bg-gray-500 w-full text-white py-2 px-4 rounded-full hover:bg-gray-600"
          >
            Log In
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;

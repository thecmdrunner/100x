import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
// import Contact from "./pages/Contact";
// import Fruit from "./pages/Fruit";
// import Company from "./pages/Company";
import { AuthProvider } from "./contexts/auth.tsx";
import Login from "./pages/Login.tsx";
import AdminRoute from "./components/AdminRoute";
import Dashboard from "./pages/Dashboard.tsx";
import Fruit from "./pages/Fruit.tsx";
import NotFound from "./components/NotFound.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard/*",
    element: <AdminRoute element={<Dashboard />} />,
  },
  {
    path: "/about/fruit/:fruitId", // Define a route parameter ":fruitId"
    element: <Fruit />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

export default function App() {
  return (
    <div className="bg-neutral-1000 ">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

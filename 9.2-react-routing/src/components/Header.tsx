import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <div className="flex gap-5 justify-evenly text-xl py-4 bg-slate-800">
      <NavLink
        // exact
        to="/"
        className={({ isActive }) =>
          `${
            isActive ? "text-green-500" : "text-gray-900"
          } underline px-3 py-2 rounded-lg bg-white`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={`${
          location.pathname === "/about" ||
          location.pathname.startsWith("/about/")
            ? "text-green-500"
            : "text-gray-900"
        } underline px-3 py-2 rounded-lg bg-white`}
      >
        About
      </NavLink>
      <NavLink
        to="/dashboard"
        className={`${
          location.pathname.startsWith("/dashboard")
            ? "text-green-500"
            : "text-gray-900"
        } underline px-3 py-2 rounded-lg bg-white`}
      >
        Dashboard
      </NavLink>
    </div>
  );
}

export default Header;

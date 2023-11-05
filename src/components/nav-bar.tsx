import { useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Settings, Home } from "lucide-react";

export const NavBar = () => {
  const location = useLocation();

  const getNavLink = useCallback(() => {
    if (["/channel", "/"].includes(location.pathname)) {
      return (
        <Link to="/settings">
          <Settings size={20} />
        </Link>
      );
    }

    if (location.pathname === "/error") {
      return null; 
    }

    if (location.pathname === "/settings") {
      return <Link to="/channel">
        <Home size={20} />
      </Link>;
    }
  }, [location.pathname]);

  return (
    <div
      data-tauri-drag-region
      className="transition ease-in text-transparent hover:text-white cursor-default rounded-t-lg font-bold select-none p-2 hover:bg-zinc-900"
    >
      overlayed
      <div className="float-right">{getNavLink()}</div>
    </div>
  );
};

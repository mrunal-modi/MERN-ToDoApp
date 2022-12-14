import { Link } from "react-router-dom";
import { useIdentity } from "../../hooks/IdentityProvider";
import Logo from "../Logo/Logo";
import "./Navbar.scss";

export default function Navbar({sidebarOpen, setsidebarOpen}) {
  const { isLoggedIn, logout } = useIdentity();
  return (
    <nav className="navbar navbar-expand-lg navbar-fixed fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <Logo />
        </Link>
        <button
          className="sidebar-toggler hidden-sm-up navbar-toggler text-white"
          type="button"
          onClick={() => setsidebarOpen(!sidebarOpen)}
        >
          <span className="bi bi-list"></span>
        </button>
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0 hidden-sm">
          {!isLoggedIn &&
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Signup</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>

            </>
          }
          {isLoggedIn &&
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/swagger">Swagger</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#" onClick={e => {e.preventDefault(); logout();}}>Logout</Link>
              </li>
            </>
          }
        </ul>
      </div>
    </nav>
  );
}

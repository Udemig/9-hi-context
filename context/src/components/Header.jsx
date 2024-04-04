import { Link, NavLink } from "react-router-dom";
import { FaShopify } from "react-icons/fa6";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top navbar-expand-sm">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center gap-3" to="/">
          <FaShopify />
          Context Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to={"/sepet"}
                className="nav-link "
                aria-current="page"
                href="#"
              >
                Sepet
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link" href="#">
                Anasayfa
              </NavLink>
            </li>
          </ul>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li>
              <button className="dropdown-item">Hepsi</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

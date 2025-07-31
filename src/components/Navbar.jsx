import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3 text-success letter-spacing-1" to="/">
          <i className="bi bi-shop me-2"></i>Al-Hamd Center
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2 fs-4">
            <li className="nav-item">
              <Link className="nav-link px-3 rounded-pill fw-semibold text-white Homehover" to="/">
                <i className="bi bi-house-door me-1"></i>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 rounded-pill fw-semibold text-white Homehover" to="/products">
                <i className="bi bi-box-seam me-1"></i>Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
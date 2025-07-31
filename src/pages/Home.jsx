import { Link, Outlet } from 'react-router-dom';

function Home() {
  return (
    <div className="jumbotron p-5 rounded bg-white shadow-lg my-5">
      <div className="container text-center">
        <h1 className="display-4 fw-bold text-success mb-4">Welcome to Al-Hamd Center!</h1>
        <p className="fs-5 text-muted">
          Discover a modern online store experience powered by React, Bootstrap, and Platzi Fake Store API. 
          This project demonstrates real-world practices in modern frontend development.
        </p>

        <hr className="my-4" />

        <p className="fs-6">
          Explore our wide collection of products, learn more about frontend technologies,
          and see how everything works behind the scenes.
        </p>

        <div className="d-flex flex-wrap gap-3 mt-4 justify-content-center">
          <Link to="/products" className="btn btn-success btn-lg px-4 shadow-sm">
            View Products
          </Link>
          <Link to="/about" className="btn btn-outline-secondary btn-lg px-4 shadow-sm">
            About Us
          </Link>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">React + Vite</h5>
                <p className="card-text">
                  Built with Vite for blazing-fast development and React for a scalable component structure.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-success">Bootstrap 5</h5>
                <p className="card-text">
                  Styled with Bootstrap 5 for responsive and mobile-friendly design.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-warning">Platzi Fake Store API</h5>
                <p className="card-text">
                  Products are fetched from a public API to simulate real-world data integration.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default Home;

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../services/api';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

// ...existing code...
return (
  <div className="container py-5">
    <h1 className="mb-4 text-center fw-bold display-4 text-success letter-spacing-1">
      Our Products
    </h1>
    <div className="row g-4">
      {products.map((product) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
          <div className="card h-100 shadow-lg border-0 rounded-4">
            <img
              src={product.images[0]}
              className="card-img-top p-3 rounded-4"
              alt={product.title}
              style={{ height: '220px', objectFit: 'contain', background: '#f8f9fa' }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title fw-semibold text-truncate">{product.title}</h5>
              <span className="badge bg-dark mb-2 align-self-start">
                {product.category?.name}
              </span>
              <p className="card-text text-success fw-bold fs-5 mb-2">
                ${product.price}
              </p>
              <Link
                to={`/products/${product.id}`}
                className="btn btn-success mt-auto rounded-pill fw-semibold shadow"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
// ...existing code...
}

export default Products;

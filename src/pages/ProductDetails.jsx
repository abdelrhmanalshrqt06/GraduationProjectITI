import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProduct } from '../services/api';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProduct(id);
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

if (!product) {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="bg-white rounded-4 shadow-lg p-5 text-center border border-2 border-danger" style={{ maxWidth: 500 }}>
        <div className="mb-3">
          <i className="bi bi-exclamation-triangle-fill text-danger display-3"></i>
        </div>
        <h2 className="fw-bold text-danger mb-3">Product Not Found</h2>
        <p className="text-secondary mb-4 fs-5">
          Sorry, the product you are looking for does not exist or may have been removed.<br />
          Please check the URL or return to the products page.
        </p>
        <Link to="/products" className="btn btn-outline-success btn-lg rounded-pill fw-semibold shadow-sm px-4">
          <i className="bi bi-arrow-left me-2"></i>Back to Products
        </Link>
      </div>
    </div>
  );
}

  return (
    <div className="container my-5">
      <div className="row g-5 align-items-center">
        <div className="col-12 col-md-6">
          <div className="bg-light p-4 rounded-4 shadow-lg text-center border border-2 border-success">
            <img
              src={product.images[0]}
              alt={product.title}
              className="img-fluid rounded-4 border border-2 border-secondary shadow-sm mb-3"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
            <div className="mt-2">
              <span className="badge bg-gradient bg-success fs-6 px-3 py-2">
                Available
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="p-5 bg-white rounded-4 shadow-lg border border-2 border-light">
            <h2 className="fw-bold text-dark mb-3 display-6">{product.title}</h2>
            <h4 className="text-success mb-2 fw-semibold">
              <i className="bi bi-currency-dollar"></i>${product.price}
            </h4>
            <span className="badge bg-dark mb-3 fs-6 px-3 py-2">
              {product.category?.name}
            </span>
            <p className="text-secondary mb-4 fs-5">{product.description}</p>

            <div className="d-grid gap-3">
              <button className="btn btn-success btn-lg fw-semibold shadow-sm py-3">
                <i className="bi bi-cart-plus me-2"></i>Add to Cart
              </button>
              <Link to="/products" className="btn btn-outline-secondary btn-lg shadow-sm">
                <i className="bi bi-arrow-left me-2"></i>Back to Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

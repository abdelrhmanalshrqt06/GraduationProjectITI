import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-success mb-3">404</h1>
        <h2 className="mb-4 fw-semibold text-dark">Page Not Found</h2>
        <p className="lead text-secondary mb-4">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn btn-success btn-lg rounded-pill shadow">
          <i className="bi bi-house-door me-2"></i>Go Home
        </Link>
      </div>
    </div>
  )
}
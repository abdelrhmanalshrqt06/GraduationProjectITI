import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-2 mt-auto shadow-lg">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 text-center fs-5">
            <p className="mb-1 fw-semibold">
              &copy; {new Date().getFullYear()} Al-Hamd Center. All rights reserved.
            </p>
            <small className="text-secondary d-block mb-3">
              Built with <i className="bi bi-bootstrap-fill text-primary"></i> Bootstrap &amp; React
            </small>
            <div className="mb-2">
              <a
                href="https://facebook.com"
                className="text-white me-3 fs-4 Homehover"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                className="text-white me-3 fs-4 Homehover"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="mailto:info@alhamdcenter.com"
                className="text-white fs-4 Homehover"
                title="Email"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
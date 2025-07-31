function About() {
  return (
    <div className="card shadow-sm p-4 mb-4 bg-light my-5">
      <h3 className="mb-3 text-secondary">
        About This Project
      </h3>
      <p>
        This store project is a modern web application designed to deliver a seamless and intuitive shopping experience.
        It leverages responsive design and interactive features to ensure usability across devices. The goal is to provide a fast,
        clean, and dynamic interface for users to explore, search, and interact with various products effortlessly.
      </p>
      <p>
        From smooth navigation to dynamic data handling, every component is crafted with attention to performance and user satisfaction.
        The project structure follows best practices in component-based architecture, modular design, and reusable code.
      </p>
      <p>
        Below are the core technologies used in building this application:
      </p>
      <div className="d-flex align-items-center justify-content-center gap-4 mt-4 flex-wrap">
        <div className="text-center">
          <i className="fab fa-html5 fa-3x text-danger"></i>
          <div className="mt-2">HTML5<br/><small>Structure & Semantics</small></div>
        </div>
        <div className="text-center">
          <i className="fab fa-css3-alt fa-3x text-primary"></i>
          <div className="mt-2">CSS3<br/><small>Styling & Layout</small></div>
        </div>
        <div className="text-center">
          <i className="fab fa-js-square fa-3x text-warning"></i>
          <div className="mt-2">JavaScript<br/><small>Interactivity & Logic</small></div>
        </div>
        <div className="text-center">
          <i className="fab fa-react fa-3x text-info"></i>
          <div className="mt-2">React<br/><small>Component-based UI</small></div>
        </div>
      </div>
    </div>
  );
}

export default About;

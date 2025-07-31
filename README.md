# Al-Hamd Center

## Overview
Al-Hamd Center is a modern e-commerce web application built with React. It provides a clean, fully responsive interface for browsing products from the Platzi Fake Store API. The application demonstrates best practices in React development, including component structure, routing, API integration, and responsive design for all device sizes.

## Features
- **Responsive Design**: Fully responsive layout using Bootstrap’s grid and utility classes, optimized for four screen sizes (extra small, small, medium, large). Text sizes and layouts adapt for mobile, tablet, laptop, and desktop in addition to using bootstrap responsive classes (col-12, col-sm-6, col-md-4, col-lg-3, etc.) .
- **Product Catalog**: Browse a collection of products with image previews, categories, and prices.
- **Product Details**: View detailed information about each product, including images, description, and category.
- **Not Found Page**: Custom 404 page with styled Bootstrap components for a consistent user experience.
- **Navigation Bar**: Responsive navbar with Bootstrap classes and icons, including hover effects.
- **Footer**: Responsive footer with social links and Bootstrap icons, always full width and centered.
- **Modern UI**: Clean and intuitive user interface built with Bootstrap 5 and Bootstrap Icons.
- **Fast Loading**: Optimized performance with Vite build tool.
- **API Integration**: Fetches product data from the Fake Store API using Axios.
- **Error Handling**: Graceful handling of missing products and API errors with user-friendly messages.
- **Accessibility**: Uses semantic HTML and accessible Bootstrap components.

## Technologies Used

### Frontend
- **React 19**: Latest version of the popular JavaScript library for building user interfaces
- **React Router 7**: For handling navigation and routing within the application
- **Bootstrap 5**: For responsive design and pre-styled components
- **Bootstrap Icons**: For modern, scalable icons throughout the UI
- **Axios**: For making HTTP requests to the API

### Development Tools
- **Vite**: Next generation frontend tooling for faster development and optimized builds
- **ESLint**: For code linting and maintaining code quality
- **npm**: Package manager for JavaScript

### API
- **Platzi Fake Store API**: RESTful API that provides product data for e-commerce websites

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/abdelrhmanMohmdt06/GraduationProject1.git
cd graduation-p
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure
```
graduation-p/
├── public/
│   └── ...                # Public assets (favicon, images, etc.)
├── src/
│   ├── assets/            # Static assets (images, logos, etc.)
│   │   └── screenshots/   # the screenshots of all the project pages are include here
│   ├── components/        # Reusable components
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── NotFound.jsx
│   ├── pages/             # Page components
│   │   ├── ProductDetails.jsx
│   │   └── Products.jsx
│   ├── services/          # API services
│   │   └── api.js
│   ├── App.jsx            # Main application component
│   ├── App.css            # Application styles
│   ├── index.css          # Global styles (responsive, Bootstrap overrides)
│   └── main.jsx           # Entry point
├── .gitignore             # Git ignore file
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML template
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
└── vite.config.js         # Vite configuration
```

> **Note:**  
> All screenshots demonstrating the appearance and responsiveness of every page in the project are organized in the `screenshots` folder inside `src/assets/`. You can use these images for documentation, presentations, or quick previews of the application's

## License
MIT

## Acknowledgements
- [Platzi Fake Store API](https://fakeapi.platzi.com/) for providing the product data
- [React](https://reactjs.org/) for the amazing library
- [Vite](https://vitejs.dev/) for the blazing fast build tool
- [Bootstrap](https://getbootstrap.com/) for the responsive design framework
- [Bootstrap Icons](https://icons.getbootstrap.com/) for scalable vector icons

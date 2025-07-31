import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import ProductsLayout from './pages/ProductsLayout'; // import the layout
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="about" element={<About />} />
          </Route>
          <Route path="/products" element={<ProductsLayout />}>
            <Route index element={<Products />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
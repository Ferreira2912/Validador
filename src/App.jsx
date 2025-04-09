import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Moon, Home, User, Mail, AlertTriangle } from 'lucide-react';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <motion.div 
            className="logo"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Moon size={30} color="#8ab4f8" />
            <span>DarkModern</span>
          </motion.div>
          <nav>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            >
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                  <Home size={18} /> Home
                </NavLink>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink to="/sobre" className={({ isActive }) => isActive ? "active" : ""}>
                  <User size={18} /> Sobre
                </NavLink>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink to="/contato" className={({ isActive }) => isActive ? "active" : ""}>
                  <Mail size={18} /> Contato
                </NavLink>
              </motion.li>
            </motion.ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <footer>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            © 2025 DarkModern - Todos os direitos reservados
          </motion.p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
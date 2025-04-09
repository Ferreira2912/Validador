import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const HomePage = () => {
  return (
    <motion.div 
      className="page home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="hero"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Bem-vindo ao DarkModern
          <motion.span
            animate={{ 
              rotate: [0, 10, -10, 10, 0],
              color: ["#8ab4f8", "#c58af9", "#8af9d4", "#8ab4f8"] 
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="accent"
          >
            <Star size={30} />
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Uma experiência moderna com design elegante e funcionalidades incríveis
        </motion.p>
      </motion.div>
      
      <motion.div 
        className="image-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <img src="/api/placeholder/600/400" alt="Modern Design Concept" className="hero-image" />
      </motion.div>
      
      <motion.div 
        className="features-preview"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <h2>Destaques</h2>
        <div className="feature-cards">
          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(138, 180, 248, 0.2)" }}
          >
            <h3>Design Moderno</h3>
            <p>Interface elegante com estilo dark</p>
          </motion.div>
          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(138, 180, 248, 0.2)" }}
          >
            <h3>Animações Fluidas</h3>
            <p>Experiência visual extraordinária</p>
          </motion.div>
          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(138, 180, 248, 0.2)" }}
          >
            <h3>Formulário Inteligente</h3>
            <p>Envio de dados com validação</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const features = [
    "Design escuro e moderno com elementos neon",
    "Navegação fluida entre páginas com React Router",
    "Animações suaves para uma experiência interativa",
    "Formulário de contato com validação e feedback",
    "Layout responsivo para todos os dispositivos",
    "Componentes reutilizáveis e bem estruturados"
  ];

  return (
    <motion.div 
      className="page about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Sobre o Projeto
      </motion.h1>
      
      <div className="about-content">
        <motion.div 
          className="about-text"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p>
            O DarkModern é um projeto desenvolvido para demonstrar as capacidades do React com React Router, 
            focando em criar uma experiência de usuário moderna e elegante com um tema escuro sofisticado.
          </p>
          <p>
            Nosso objetivo é proporcionar um template avançado que combine estética contemporânea com 
            funcionalidades práticas, incluindo animações e transições fluidas que elevam a experiência do usuário.
          </p>
        </motion.div>
        
        <motion.div 
          className="about-image"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img src="/api/placeholder/500/350" alt="About our concept" className="about-img" />
        </motion.div>
      </div>
      
      <motion.div 
        className="features-list"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <h2>Principais Características</h2>
        <ul>
          {features.map((feature, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <CheckCircle size={20} color="#8ab4f8" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;

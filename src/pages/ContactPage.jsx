import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, AlertCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validate = () => {
    const newErrors = {};
    
    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.mensagem.trim()) {
      newErrors.mensagem = 'Mensagem é obrigatória';
    }
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    // Form is valid - log to console as requested
    console.log('Dados do formulário:', formData);
    
    // Show success message
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        nome: '',
        email: '',
        mensagem: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <motion.div 
      className="page contact-page"
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
        Entre em Contato
      </motion.h1>
      
      <div className="contact-container">
        <motion.div 
          className="contact-info"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p>Estamos ansiosos para ouvir você! Preencha o formulário ao lado e entraremos em contato o mais breve possível.</p>
          <img src="/api/placeholder/450/300" alt="Contact" className="contact-img" />
        </motion.div>
        
        <motion.div 
          className="contact-form-container"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {submitted ? (
            <motion.div 
              className="success-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <h3>Mensagem Enviada!</h3>
              <p>Obrigado por entrar em contato. Os dados foram enviados para o console.</p>
            </motion.div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <motion.input 
                  whileFocus={{ boxShadow: "0 0 0 2px rgba(138, 180, 248, 0.5)" }}
                  type="text" 
                  id="nome" 
                  name="nome" 
                  value={formData.nome}
                  onChange={handleChange}
                  className={errors.nome ? "error" : ""}
                />
                {errors.nome && (
                  <motion.span 
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle size={16} />
                    {errors.nome}
                  </motion.span>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <motion.input 
                  whileFocus={{ boxShadow: "0 0 0 2px rgba(138, 180, 248, 0.5)" }}
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error" : ""}
                />
                {errors.email && (
                  <motion.span 
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle size={16} />
                    {errors.email}
                  </motion.span>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="mensagem">Mensagem</label>
                <motion.textarea 
                  whileFocus={{ boxShadow: "0 0 0 2px rgba(138, 180, 248, 0.5)" }}
                  id="mensagem" 
                  name="mensagem"
                  rows="5"
                  value={formData.mensagem}
                  onChange={handleChange}
                  className={errors.mensagem ? "error" : ""}
                />
                {errors.mensagem && (
                  <motion.span 
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle size={16} />
                    {errors.mensagem}
                  </motion.span>
                )}
              </div>
              
              <motion.button 
                type="submit"
                className="submit-button"
                whileHover={{ scale: 1.05, backgroundColor: "#7aa4e8" }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={18} />
                Enviar Mensagem
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
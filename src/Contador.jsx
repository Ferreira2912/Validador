import { useState, useEffect } from "react";

const Contador = () => {
  const [contador, setContador] = useState(() => {
    const savedValue = localStorage.getItem('contador');
    return savedValue ? parseInt(savedValue) : 0;
  });

  useEffect(() => {
    localStorage.setItem('contador', contador);
  }, [contador]);

  return (
    <>
      <h2>Contador</h2>
      <p className="contador-valor">
        Valor: {contador}
        {contador >= 10 && <span> 🎉 Parabéns!</span>}
      </p>
      <button onClick={() => setContador(contador + 1)}>➕ Incrementar</button>
      <button onClick={() => setContador(contador - 1)} disabled={contador === 0}>
        ➖ Decrementar
      </button>
      <button onClick={() => setContador(0)}>🔄 Resetar</button>
    </>
  );
};

export default Contador;
import { useState, useEffect } from "react";

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [busca, setBusca] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsuarios(data));
  }, []);

  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.name.toLowerCase().includes(busca.toLowerCase())
  );

  const toggleDetails = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <h2>Lista de Usuários</h2>
      <input
        type="text"
        placeholder="🔍 Buscar usuário..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="input-busca"
      />
      <ul>
        {usuariosFiltrados.map(({ id, name, email, phone }) => (
          <li key={id} className="usuario-item">
            <div>
              {name}
              <button onClick={() => toggleDetails(id)} className="btn-details">
                📄 Ver Detalhes
              </button>
            </div>
            {expandedId === id && (
              <div className="user-details">
                <p>📧 Email: {email}</p>
                <p>📞 Telefone: {phone}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListaUsuarios;
import Contador from "./Contador";
import Relogio from "./Relogio";
import ListaUsuarios from "./ListaUsuarios";
import "./styles.css";

const App = () => {
  return (
    <div className="container">
      <h1>React Hooks - useState e useEffect</h1>
      <div className="section">
        <Contador />
      </div>
      <div className="section">
        <Relogio />
      </div>
      <div className="section">
        <ListaUsuarios />
      </div>
    </div>
  );
};

export default App;
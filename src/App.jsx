import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recepcion from "./pages/Recepcion";
import Seguimiento from "./pages/Seguimiento";
import Notificacion from "./pages/Notificacion";
import Cierre from "./pages/Cierre";
import Asignacion from "./pages/Asignacion";

function App() {
  return (
    <Router>
      <div>
        <h1>Provedor API</h1>
        <nav>
          <a href="/recepcion">Recepción</a> |{" "}
          <a href="/seguimiento">Seguimiento</a> |{" "}
          <a href="/notificacion">Notificación</a> |{" "}
          <a href="/cierre">Cierre</a> | <a href="/asignacion">Asignación</a>
        </nav>
        <Routes>
          <Route path="/recepcion" element={<Recepcion />} />
          <Route path="/seguimiento" element={<Seguimiento />} />
          <Route path="/notificacion" element={<Notificacion />} />
          <Route path="/cierre" element={<Cierre />} />
          <Route path="/asignacion" element={<Asignacion />} />
          <Route path="/" element={<Recepcion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

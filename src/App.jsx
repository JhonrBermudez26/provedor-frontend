// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Recepcion from "./pages/Recepcion";
import Seguimiento from "./pages/Seguimiento";
import Notificacion from "./pages/Notificacion";
import Cierre from "./pages/Cierre";
import Asignacion from "./pages/Asignacion";
import "./App.css";
import avatar from './assets/avatar.png'

function App() {
  return (
    <Router>
      <div className="dashboard-container">
        {/* Sidebar Izquierda */}
        <aside className="sidebar">
          <img src={avatar} alt="Proveedor" className="avatar" />
          <br></br>
          <nav className="nav-links">
            <Link to="/recepcion">Recepción</Link>
            <Link to="/seguimiento">Seguimiento</Link>
            <Link to="/notificacion">Notificación</Link>
            <Link to="/cierre">Cierre</Link>
            <Link to="/asignacion">Asignación</Link>
          </nav>
        </aside>

        {/* Contenido Derecho */}
        <main className="main-content">
          <header>
            <h1>Dashboard Proveedor API</h1>
            <br></br>
          </header>
          <section className="content-box">
            <Routes>
              <Route path="/recepcion" element={<Recepcion />} />
              <Route path="/seguimiento" element={<Seguimiento />} />
              <Route path="/notificacion" element={<Notificacion />} />
              <Route path="/cierre" element={<Cierre />} />
              <Route path="/asignacion" element={<Asignacion />} />
              <Route path="/" element={<Recepcion />} />
            </Routes>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;

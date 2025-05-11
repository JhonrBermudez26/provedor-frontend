import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "../components/DataTable";
import "../iteraciones.css";

const Asignacion = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://3.21.248.127:9525/api/despacho/asignacion"
      );
      setData(Array.isArray(response.data) ? response.data : [response.data]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handlePost = async () => {
    try {
      const response = await axios.post(
        "http://3.21.248.127:9525/api/despacho/asignacion",
        formData
      );
      setData([...data, response.data]);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Asignación de Transporte</h2>
      <button onClick={fetchData}>Listar Todos (GET)</button>
      <DataTable data={data} />
      <div>
        <h3>Crear asignación (POST)</h3>
        <input
          type="text"
          placeholder="Datos de la asignación"
          onChange={(e) =>
            setFormData({ ...formData, example: e.target.value })
          }
        />
        <button onClick={handlePost}>Enviar</button>
      </div>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
};

export default Asignacion;

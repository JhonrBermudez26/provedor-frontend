import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "../components/DataTable";

const Seguimiento = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [id, setId] = useState("");
  const [formData, setFormData] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://3.21.248.127:9525/api/despacho/seguimiento"
      );
      setData(Array.isArray(response.data) ? response.data : [response.data]);
    } catch (err) {
      setError(err.message);
    }
  };

  const fetchById = async () => {
    try {
      const response = await axios.get(
        `http://3.21.248.127:9525/api/despacho/seguimiento/${id}`
      );
      setData([response.data]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handlePost = async () => {
    try {
      const response = await axios.post(
        "http://3.21.248.127:9525/api/despacho/seguimiento",
        formData
      );
      setData([...data, response.data]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handlePut = async () => {
    try {
      const response = await axios.put(
        `http://18.119.167.127:9525/api/despacho/seguimiento/${id}`,
        formData
      );
      fetchData();
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Seguimiento de Despacho</h2>
      <button onClick={fetchData}>Listar Todos (GET)</button>
      <input
        type="text"
        placeholder="ID para buscar"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={fetchById}>Buscar por ID</button>
      <DataTable data={data} />
      <div>
        <h3>Crear seguimiento (POST)</h3>
        <input
          type="text"
          placeholder="Datos del seguimiento"
          onChange={(e) =>
            setFormData({ ...formData, example: e.target.value })
          }
        />
        <button onClick={handlePost}>Enviar</button>
      </div>
      <div>
        <h3>Actualizar seguimiento (PUT)</h3>
        <input
          type="text"
          placeholder="Datos para actualizar"
          onChange={(e) =>
            setFormData({ ...formData, example: e.target.value })
          }
        />
        <button onClick={handlePut}>Actualizar</button>
      </div>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
};

export default Seguimiento;

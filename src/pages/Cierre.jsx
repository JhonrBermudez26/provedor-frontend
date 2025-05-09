import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "../components/DataTable";

const Cierre = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [id, setId] = useState("");
  const [formData, setFormData] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://3.21.248.127:9525/api/despacho/cierre"
      );
      setData(Array.isArray(response.data) ? response.data : [response.data]);
    } catch (err) {
      setError(err.message);
    }
  };

  const fetchById = async () => {
    try {
      const response = await axios.get(
        `http://3.21.248.127:9525/api/despacho/cierre/${id}`
      );
      setData([response.data]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handlePost = async () => {
    try {
      const response = await axios.post(
        "http://3.21.248.127:9525/api/despacho/cierre",
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
      <h2>Cierre de Despacho</h2>
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
        <h3>Crear cierre (POST)</h3>
        <input
          type="text"
          placeholder="Datos del cierre"
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

export default Cierre;

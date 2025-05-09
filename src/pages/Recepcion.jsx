import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "../components/DataTable";

const Recepcion = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://3.21.248.127:9525/api/despacho/recepcion"
      );
      setData(Array.isArray(response.data) ? response.data : [response.data]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handlePost = async () => {
    try {
      const response = await axios.post(
        "http://3.21.248.127:9525/api/despacho/recepcion",
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
      <h2>Recepción de Pedidos</h2>
      <button onClick={fetchData}>Actualizar (GET)</button>
      <DataTable data={data} />
      <div>
        <h3>Enviar nuevo pedido (POST)</h3>
        <input
          type="text"
          placeholder="Datos del pedido"
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

export default Recepcion;

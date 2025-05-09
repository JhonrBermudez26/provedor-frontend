import React from "react";

const DataTable = ({ data }) => {
  if (!data || data.length === 0) return <p>No hay datos disponibles.</p>;

  return (
    <table style={{ border: "1px solid black", margin: "10px 0" }}>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key} style={{ border: "1px solid black", padding: "5px" }}>
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, i) => (
              <td key={i} style={{ border: "1px solid black", padding: "5px" }}>
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;

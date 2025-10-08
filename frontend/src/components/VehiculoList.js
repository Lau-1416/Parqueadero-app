import React, { useState, useEffect } from 'react';

export default function VehiculoList() {
  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    fetchVehiculos();
  }, []);

  const fetchVehiculos = async () => {
    const res = await fetch('http://localhost:5000/api/vehiculos');
    const data = await res.json();
    setVehiculos(data.filter(v => v.estado === 'dentro'));
  };

  const handleSalida = async (id) => {
    const res = await fetch(`http://localhost:5000/api/vehiculos/${id}`, {
      method: 'PUT'
    });
    if (res.ok) {
      alert('Salida registrada');
      fetchVehiculos();
    }
  };

  return (
    <div className="lista-vehiculos">
      {vehiculos.length === 0 ? (
        <p>No hay vehículos dentro del parqueadero.</p>
      ) : (
        <ul>
          {vehiculos.map(v => (
            <li key={v.id}>
              <strong>{v.placa}</strong> - {v.tipo}
              <button onClick={() => handleSalida(v.id)}>Registrar Salida</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
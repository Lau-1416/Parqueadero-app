import React, { useState } from 'react';

export default function VehiculoForm({ tipoAccion }) {
  const [placa, setPlaca] = useState('');
  const [tipo, setTipo] = useState('carro');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/vehiculos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ placa, tipo })
    });
    if (res.ok) {
      alert('Vehículo registrado con éxito');
      setPlaca('');
    } else {
      alert('Error al registrar');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Placa (ej. ABC123)"
        value={placa}
        onChange={(e) => setPlaca(e.target.value)}
        required
      />
      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="carro">Carro</option>
        <option value="moto">Moto</option>
        <option value="camion">Camión</option>
      </select>
      <button type="submit">Registrar Ingreso</button>
    </form>
  );
}
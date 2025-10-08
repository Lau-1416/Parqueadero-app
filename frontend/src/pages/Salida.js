import React, { useState, useEffect } from 'react';
import VehiculoList from '../components/VehiculoList';

export default function Salida() {
  return (
    <div className="page salida">
      <h2>Registrar Salida de Vehículo</h2>
      <VehiculoList />
    </div>
  );
}
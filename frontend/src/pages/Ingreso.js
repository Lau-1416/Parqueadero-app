import React, { useState } from 'react';
import VehiculoForm from '../components/VehiculoForm';

export default function Ingreso() {
  return (
    <div className="page ingreso">
      <h2>Registrar Ingreso de Vehículo</h2>
      <VehiculoForm tipoAccion="ingreso" />
    </div>
  );
}
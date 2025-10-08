const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Datos en memoria (simulación de base de datos)
let vehiculos = [];
let nextId = 1;

// GET: Obtener todos los vehículos
app.get('/api/vehiculos', (req, res) => {
  res.json(vehiculos);
});

// POST: Registrar entrada de vehículo
app.post('/api/vehiculos', (req, res) => {
  const { placa, tipo } = req.body;
  if (!placa || !tipo) {
    return res.status(400).json({ error: 'Placa y tipo son requeridos' });
  }
  const nuevoVehiculo = {
    id: nextId++,
    placa: placa.toUpperCase(),
    tipo,
    horaEntrada: new Date().toISOString(),
    horaSalida: null,
    estado: 'dentro'
  };
  vehiculos.push(nuevoVehiculo);
  res.status(201).json(nuevoVehiculo);
});

// PUT: Registrar salida de vehículo
app.put('/api/vehiculos/:id', (req, res) => {
  const { id } = req.params;
  const vehiculo = vehiculos.find(v => v.id === parseInt(id));
  if (!vehiculo) {
    return res.status(404).json({ error: 'Vehículo no encontrado' });
  }
  if (vehiculo.estado === 'fuera') {
    return res.status(400).json({ error: 'El vehículo ya salió' });
  }
  vehiculo.horaSalida = new Date().toISOString();
  vehiculo.estado = 'fuera';
  res.json(vehiculo);
});

// DELETE: Eliminar registro (opcional, solo para desarrollo)
app.delete('/api/vehiculos/:id', (req, res) => {
  const { id } = req.params;
  vehiculos = vehiculos.filter(v => v.id !== parseInt(id));
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
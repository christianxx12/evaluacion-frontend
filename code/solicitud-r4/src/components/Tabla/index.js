import React from 'react';

import './Tabla.css';

function Tabla() {
  return (
    <div className="tabla-container">
      <table>
        <thead>
          <tr class="odd">
            <th>País</th>
            <th>Ciudad</th>
            <th>Temperatura</th>
            <th>Velocidad Viento</th>
            <th>Humedad</th>
          </tr>
        </thead>
        <tbody>
          <tr class="even">
            <td data-label="País">Estados Unidos</td>
            <td data-label="Ciudad">New York</td>
            <td data-label="Temperatura">10°C</td>
            <td data-label="Velocidad Viento">5km/h</td>
            <td data-label="Humedad">50%</td>
          </tr>
          <tr class="odd">
            <td data-label="País">Estados Unidos</td>
            <td data-label="Ciudad">New York</td>
            <td data-label="Temperatura">10°C</td>
            <td data-label="Velocidad Viento">5km/h</td>
            <td data-label="Humedad">50%</td>
          </tr>
          <tr class="even">
            <td data-label="País">Estados Unidos</td>
            <td data-label="Ciudad">New York</td>
            <td data-label="Temperatura">10°C</td>
            <td data-label="Velocidad Viento">5km/h</td>
            <td data-label="Humedad">50%</td>
          </tr>
          <tr class="odd">
            <td data-label="País">Estados Unidos</td>
            <td data-label="Ciudad">New York</td>
            <td data-label="Temperatura">10°C</td>
            <td data-label="Velocidad Viento">5km/h</td>
            <td data-label="Humedad">50%</td>
          </tr>
          <tr class="even">
            <td data-label="País">Estados Unidos</td>
            <td data-label="Ciudad">New York</td>
            <td data-label="Temperatura">10°C</td>
            <td data-label="Velocidad Viento">5km/h</td>
            <td data-label="Humedad">50%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;

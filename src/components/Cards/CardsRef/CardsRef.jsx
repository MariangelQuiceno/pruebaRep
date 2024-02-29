import React from 'react';
import './cardsRefCss.css'

export const CardsRef = ({ refenceId, name, rol, phone, address }) => {
  

  return (
    <div className="cardReference" id={refenceId}>
    <p><span>Nombre:</span> {name}</p>
    <p><span>Cargo:</span> {rol}</p>
    <p><span>Teléfono:</span> {phone}</p>
    <p><span>Correo Electronico:</span>{address}</p>
    </div>
  );
}

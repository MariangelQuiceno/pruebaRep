import React from 'react';
import './cardsProjectCss.css'

export const CardsProject = ({ id, img, title, description, link }) => {
  

  return (
    <div className="card" id={id}>
    <img className="ImageProject" src={img} alt="Imagen Proyecto" />
    <div className="card-text">
    <h4>{title}</h4>
    <p>{description}</p>
    <a className='linkCards' href={link}>Ir a Proyecto</a>
    </div>
    </div>
  );
}

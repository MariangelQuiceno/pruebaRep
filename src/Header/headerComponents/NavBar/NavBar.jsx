import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import { Item } from '../Item/Item';
import './navCss.css'

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <Item link="/" content="Inicio" />
        <Item link="/profile" content="Acerca de mi" />
        <Item link="/projects" content="Proyectos" />
        <Item link="/references" content="Referencias" />
        <Item link="/experience" content="Experiencia" />
      </ul>
    </nav>
  );
};

import React from 'react';

export const Titles = ({ text, level }) => {
  const NivelTitulo = `h${level}`;

  return (
    <NivelTitulo>
      {text}
    </NivelTitulo>
  );
}

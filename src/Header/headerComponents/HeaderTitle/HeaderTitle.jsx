import React from 'react';

export const HeaderTitle = ({ text, level }) => {
  const NivelTitulo = `h${level}`;

  return (
    <NivelTitulo>
      {text}
    </NivelTitulo>
  );
}

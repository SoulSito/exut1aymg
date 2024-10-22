import './App.css'
import React from 'react'
import Noticia from './components/Noticia.jsx'

// Array de objetos que contiene la información de los testimonios.
const NoticiaData = [
  {
    id: 1, // ID único para identificar el testimonio.
    nombre: 'Cielo', // Nombre de la persona que da el testimonio.
    cargo: '22 de octubre de 2024', // Cargo o profesión de la persona.
    testimonio: 'React es una biblioteca increíble para construir interfaces dinámicas.', // Opinión sobre React.
    imagen: './sky.jpg', // URL de la imagen asociada al testimonio.
    alt: 'Juan Pérez en su oficina',
    avatar: './avatar01.png',
    contadorInicial: 25
  },
  {
    id: 2, 
    nombre: 'Playa',
    cargo: '22 de octubre de 2024',
    testimonio: 'Me encanta la modularidad que ofrece React en el desarrollo de aplicaciones.',
    imagen: './sea.jpg', // URL de la imagen asociada al testimonio.
    alt: 'Ana Gómez trabajando',
    avatar: './avatar02.png',
    contadorInicial: 70
  },
  {
    id: 3, // ID único para identificar el testimonio.
    nombre: 'Linux', // Nombre de la persona que da el testimonio.
    cargo: '22 de octubre de 2024', // Cargo o profesión de la persona.
    testimonio: 'React es una biblioteca increíble para construir interfaces dinámicas.', // Opinión sobre React.
    imagen: './tux.jpg', // URL de la imagen asociada al testimonio.
    alt: 'Juan Pérez en su oficina',
    avatar: './avatar03.png',
    contadorInicial: 75
  },
  {
    id: 4, 
    nombre: 'Mario',
    cargo: '22 de octubre de 2024',
    testimonio: 'Me encanta la modularidad que ofrece React en el desarrollo de aplicaciones.',
    imagen: './mario.jpg', // URL de la imagen asociada al testimonio.
    alt: 'Ana Gómez trabajando',
    avatar: './avatar04.png',
    contadorInicial: 45
  },
];

// Componente principal de la aplicación.
const App = () => {
  return (
    <div>
      {NoticiaData.map(noticia => (
        <Noticia 
          key={noticia.id} // Clave única necesaria para cada elemento renderizado dentro de un bucle.
          nombre={noticia.nombre} // Pasamos el nombre como prop al componente 'Testimonio'.
          cargo={noticia.cargo} // Pasamos el cargo como prop.
          testimonio={noticia.testimonio} // Pasamos el texto del testimonio como prop.
          imagen={noticia.imagen} // Pasamos la URL de la imagen como prop.
          alt={noticia.alt} // Pasamos la descripción alternativa de la imagen como prop.
          avatar={noticia.avatar}
          contadorInicial={noticia.contadorInicial}
        />
      ))}
    </div>
  );
};

export default App;

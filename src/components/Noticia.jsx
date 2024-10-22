import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import Avatar from '@mui/material/Avatar';
import React, { useState } from 'react'; // Importamos React y el hook useState para manejar el estado local.
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material'; // Importamos componentes de Material UI para estilizar la interfaz.
import FavoriteIcon from '@mui/icons-material/Favorite'; // Icono de "Me gusta" lleno.

const Noticia = ({ nombre, cargo, testimonio, imagen, alt, avatar, contadorInicial }) => {
  // Definimos el estado 'meGusta' y 'contadorMeGusta' con useState, inicializando el contador con el valor proporcionado.
  const [meGusta, setMeGusta] = useState(false);
  const [contadorMeGusta, setContadorMeGusta] = useState(contadorInicial); // Inicializamos el contador con el valor proporcionado.

  // Función para alternar el estado de 'meGusta' y actualizar el contador.
  const toggleMeGusta = () => {
    setMeGusta(!meGusta);
    setContadorMeGusta(prev => meGusta ? prev - 1 : prev + 1); // Incrementa o decrementa el contador según el estado.
  };

  return (
    <Card style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '16px' }}>
        <Avatar src={avatar} style={{ width: 60, height: 60, marginRight: '16px' }} />
        <Box sx={{ textAlign: 'center', flexGrow: 1 }}>
          <Typography variant="h5">{nombre}</Typography>
          <Typography variant="subtitle1">{cargo}</Typography>
        </Box>
      </Box>
      <img src={imagen} alt={alt} style={{ width: '100%', height: '194px' }} />
      <CardContent>
        <Typography variant="body1">"{testimonio}"</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
          <IconButton onClick={toggleMeGusta}>
            {/* Cambiar el color del icono de corazón a morado */}
            {meGusta ? <FavoriteIcon sx={{ color: 'purple' }} /> : <FavoriteBorderIcon sx={{ color: 'purple' }} />}
          </IconButton>
          <Typography variant="body2" style={{ marginLeft: '8px', alignSelf: 'center' }}>
            {contadorMeGusta}
          </Typography>
          {meGusta && (
            <IconButton style={{ marginLeft: '8px' }}>
              <ShareIcon />
            </IconButton>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Noticia;
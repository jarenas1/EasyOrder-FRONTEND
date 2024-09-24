import React, { useEffect } from 'react';
import { io } from 'socket.io-client';

const WebSocketComponent = ({ onNewMessage }) => {
  useEffect(() => {
    const socket = io('https://easyorder-backend-3.onrender.com/api/v1/websocketinfo'); // URL del servidor Socket.IO

    // Escuchar cuando el socket se conecta
    socket.on('connect', () => {
      console.log('Conectado a Socket.IO');
    });

    // Escuchar los mensajes del servidor y pasarlos al componente padre
    socket.on('message', (data) => {
      console.log('Mensaje recibido:', data);
      onNewMessage(data); // Llamar a la función recibida por props para actualizar el estado en el padre
    });

    // Limpiar la conexión al desmontar el componente
    return () => {
      socket.disconnect();
    };
  }, [onNewMessage]);

  return null; // No es necesario renderizar nada en este componente, ya que solo maneja WebSockets
};

export default WebSocketComponent;
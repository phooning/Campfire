import { useEffect, useRef } from 'react';
import io from 'socket.io-client';

export const useWebSocket = (url: string): typeof socket => {
  const socket = io(url);
  useEffect(() => {
    socket.on('connect', () => {
      console.log('SOCKET_CONNECTED', url);
    });

    return () => {
      socket.close();
    };
  }, []);

  return socket;
};

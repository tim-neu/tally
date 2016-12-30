import Server from 'socket.io';

const port = 8090;

export function startServer(store) {
  const io = new Server().attach(port);
  console.log('Listening on port', port + '...');

  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );

  io.on('connection', (socket) => {
  	socket.emit('state', store.getState().toJS());
  });
  
}
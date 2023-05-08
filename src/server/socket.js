export default function websocket(url) {
  let socket = new WebSocket(url);

  socket.onopen = (event) => {
    console.log(event);
  };

  socket.onerror = (event) => {
    console.error(event);
  };

  socket.onclose = (event) => {
    console.error(event);
    setInterval(() => {
      websocket(url);
    }, 60000);
  };

  return socket;
}

####  Websockets 
##### Klienten
```javascript
const exampleSocket = new WebSocket(
  "wss://www.example.com/socketserver"
);

exampleSocket.onopen = (event) => {
    exampleSocket.send("Ulvene kommer!");
};

exampleSocket.onclose = (event) => {
    if (event.code === 1001) {
        console.log('serveren lukker sgu')
    }
    if (event.code === 1011) {
        console.log('der skete en fejl')
    }
};
```
Fra [mozilla](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)

####  Websockets 
##### Klienten
```javascript
const exampleSocket = new WebSocket(
  "wss://www.example.com/socketserver",
  "protocolOne",
);

```
```javascript
exampleSocket.onopen = (event) => {
exampleSocket.send("Here's some text that the server is urgently awaiting!");
};
```
Fra [mozilla](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)

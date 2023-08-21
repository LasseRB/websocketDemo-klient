####  Websockets 

##### "**Full Duplex bi-directional communication**"

Klient sender 'opgraderings'-handshake
```javascript
GET /chat HTTP/1.1
Host: morsvogn.dk:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```
Forbindelsen går fra:
En opgradering til http:
```javascript
http://morsvogn.dk
```
til:
```javascript
ws://morsvogn.dk
```

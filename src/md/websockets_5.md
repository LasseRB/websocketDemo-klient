####  Websockets 
##### Klienten
```javascript
const http = require('http');
const ws = require('ws');

const wss = new ws.Server({noServer: true});

function accept(req, res) {
    // ** håndterer opgradering ** // 
    wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onConnect);
}

function onConnect(ws) {
    ws.on('message', function (message) {
        message = message.toString();
        ws.send(`Du skrev, ${name}!`);
    });
}

```
Fra [Modern Javascript Tutorial](https://javascript.info/websocket)

import WebSocket from 'ws';
import getMac from './getMac.js';

const startFunc = () => {
    const ws = new WebSocket('ws://localhost:3045');

    ws.on('error', console.error);

    ws.on('open', function open() {
        ws.send('something');
        const localMac = getMac();
        ws.send(localMac);
        ws.send("getLedgerNames");
        ws.send("getStockItems");
    });

    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });
};

export default startFunc;
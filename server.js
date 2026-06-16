import http from "http";
import normalizePort from "./port.js";

import startWebSocketServer from "./Projects/WebSocketServer/V5/entryFile.js";

export default function startServer(app) {
    const port = normalizePort(process.env.PORT || 3025);
    const server = http.createServer(app);

    startWebSocketServer(server);

    server.listen(port, () => {
        console.log(`http://localhost:${port}`);
    });

    return { port }; // 👈 add this
};
import { WebSocketServer } from "ws";

import {
    ExecuteHandlerFunc
} from "../../../CommonExpose/ToServer/v1/index.js";

import RegisterHandlers from "./registerHandlers.js";

const StartFunc = (server) => {

    RegisterHandlers();

    const wss = new WebSocketServer({ server });

    wss.on("connection", (ws) => {
        console.log("connected");
        ws.on("message", (data) => {
            console.log("data : ", data);
            ExecuteHandlerFunc({
                ws,
                data
            });
        });
        ws.on("close", () => {
            console.log("disconnected");
        });

        ws.on("error", (err) => {
            console.log(err);
        });

    });
};

export default StartFunc;
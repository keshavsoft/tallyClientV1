import WebSocket from "ws";
import { SetFunc } from "../../../CommonExpose/wsToTally.js";

const startFunc = () => {
    const ws = new WebSocket("ws://localhost:3045");

    SetFunc({ inWs: ws });
};

export default startFunc;
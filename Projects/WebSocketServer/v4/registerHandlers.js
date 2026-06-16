import {
    RegisterJsonHandlerFunc,
    RegisterStringHandlerFunc
} from "../../../CommonExpose/ToServer/v1/index.js";

const StartFunc = () => {

    RegisterJsonHandlerFunc({
        key: "registerMachine",
        handler: ({ ws, payload }) => {
            console.log(payload.machineId);
        }
    });

    RegisterStringHandlerFunc({
        key: "getLedgerNames",
        handler: ({ ws }) => {
            ws.send("getLedgerNames");
        }
    });

};

export default StartFunc;

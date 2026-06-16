import {
    RegisterHandlerFunc
} from "../../../CommonExpose/ToServer/v1/index.js";

const StartFunc = () => {

    RegisterHandlerFunc({
        key: "registerMachine",
        handler: ({ ws, payload }) => {
            console.log(payload.machineId);
        }
    });

    RegisterHandlerFunc({
        key: "getLedgerNames",
        handler: ({ ws }) => {
            ws.send("getLedgerNames");
        }
    });

};

export default StartFunc;
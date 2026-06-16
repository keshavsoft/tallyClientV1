import {
    RegisterJsonHandlerFunc,
    RegisterStringHandlerFunc
} from "../../../CommonExpose/ToServer/v1/index.js";

const StartFunc = () => {

    RegisterJsonHandlerFunc({
        key: "ledgerNames",
        handler: ({ ws, payload }) => {
            console.log(payload.asArray.length);
        }
    });

    RegisterStringHandlerFunc({
        key: "getLedgerNames",
        handler: ({ ws }) => {
            ws.send("getLedgerNames");
        }
    });

    RegisterStringHandlerFunc({
        key: "38:7c:76:0b:87:09",
        handler: ({ ws }) => {
            ws.send("getLedgerNames");
        }
    });
};

export default StartFunc;

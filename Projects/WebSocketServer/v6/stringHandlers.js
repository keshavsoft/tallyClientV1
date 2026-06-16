import {
    RegisterStringHandlerFunc
} from "../../../CommonExpose/ToServer/v2/index.js";

const StartFunc = () => {

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

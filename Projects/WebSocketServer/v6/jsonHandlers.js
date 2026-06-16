import {
    RegisterJsonHandlerFunc
} from "../../../CommonExpose/ToServer/v2/index.js";

import RegisterLedgerNames from "./JsonHandlers/ledgerNames.js";

const StartFunc = () => {
    RegisterJsonHandlerFunc({
        key: "ledgerNames",
        handler: RegisterLedgerNames
    });
};

export default StartFunc;

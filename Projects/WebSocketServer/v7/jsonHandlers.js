import {
    RegisterJsonHandlerFunc
} from "../../../CommonExpose/ToServer/v2/index.js";

import RegisterLedgerNames from "./JsonHandlers/ledgerNames.js";
import RegisterStockItems from "./JsonHandlers/stockItems.js";

const StartFunc = () => {
    RegisterJsonHandlerFunc({
        key: "ledgerNames",
        handler: RegisterLedgerNames
    });

    RegisterJsonHandlerFunc({
        key: "stockItems",
        handler: RegisterStockItems
    });
};

export default StartFunc;

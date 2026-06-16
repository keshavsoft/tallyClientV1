import {
    RegisterJsonHandlerFunc
} from "../../../CommonExpose/ToServer/v2/index.js";

const StartFunc = () => {

    RegisterJsonHandlerFunc({
        key: "ledgerNames",
        handler: ({ ws, payload }) => {
            console.log(payload.asArray.length);
        }
    });

};

export default StartFunc;

import RegisterJsonHandlers from "./jsonHandlers.js";
import RegisterStringHandlers from "./stringHandlers.js";

const StartFunc = () => {

    RegisterJsonHandlers();
    RegisterStringHandlers();
};

export default StartFunc;

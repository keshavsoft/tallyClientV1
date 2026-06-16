const jsonHandlers = new Map();
const stringHandlers = new Map();

const RegisterJsonHandlerFunc = ({ key, handler }) => {
    jsonHandlers.set(key, handler);
};

const RegisterStringHandlerFunc = ({ key, handler }) => {
    stringHandlers.set(key, handler);
};

const ExecuteHandlerFunc = ({ ws, data }) => {
    const message = data.toString();

    let key;
    let payload;
    let handler;

    try {
        payload = JSON.parse(message);
        key = payload.Type;
        handler = jsonHandlers.get(key);
    } catch {
        payload = message;
        key = message;

        handler = stringHandlers.get(key);
    };

    if (handler) {
        handler({ ws, payload });
    };
};

export {
    RegisterJsonHandlerFunc,
    RegisterStringHandlerFunc,
    ExecuteHandlerFunc
};

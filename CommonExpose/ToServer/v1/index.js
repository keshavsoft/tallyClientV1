const handlers = new Map();

const RegisterHandlerFunc = ({ key, handler }) => {
    handlers.set(key, handler);
};

const ExecuteHandlerFunc = ({ ws, data }) => {
    const message = data.toString();

    let key;
    let payload;

    try {
        payload = JSON.parse(message);
        key = payload.Type;
    } catch {
        payload = message;
        key = message;
    }

    const handler = handlers.get(key);

    if (handler) {
        handler({ ws, payload });
    }
};

export {
    RegisterHandlerFunc,
    ExecuteHandlerFunc
};
import express from 'express';
import { ReadFunc } from "../../../CommonExpose/wsToTally.js";

const router = express.Router();

router.get('/', async (req, res) => {
    const ws = ReadFunc();

    if (ws?.readyState === 1) {

        ws.send("hello");
        return res.status(200).send('up');
    };

    return res.status(503).send('down');
});

export { router };
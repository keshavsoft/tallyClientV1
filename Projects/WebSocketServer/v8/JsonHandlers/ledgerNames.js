import fs from "fs";

const dataPath = "./Data/LedgerNames.json";

const StartFunc = ({ ws, payload }) => {
    console.log(payload.asArray.length);

    fs.writeFileSync(dataPath, JSON.stringify(payload.asArray));

};

export default StartFunc;

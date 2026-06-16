let StartFunc = ({ inDataAsString, inws, inClients, inChatLog, inSendFunc }) => {
    let LocalDataAsSting = inDataAsString;
    console.log("LocalDataAsSting : ", LocalDataAsSting);

    switch (LocalDataAsSting) {
        case "38:7c:76:0b:87:09":
            inws.send("getLedgerNames");
            break;

        default:
            break;
    }
};

export { StartFunc };
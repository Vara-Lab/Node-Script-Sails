import { 
    createGearApi, 
    sailsInstance, 
    gearKeyringByWalletData 
} from "./utils.js";
import { 
    CONTRACT_ID, 
    IDL, 
    NETWORK, 
    WALLET_MNEMONIC, 
    WALLET_NAME 
} from "./consts.js";
import {
    commandRed,
    commandYellow,
    commandGreen
} from "./commands.js";
import { queryTrafficLight } from "./queries.js";

const main = async () => {
    // Set the api
    const api = await createGearApi(NETWORK);
    // Set the sails instance
    const sails = await sailsInstance(
        api,
        NETWORK,
        CONTRACT_ID,
        IDL
    );
    // Set the signer 
    const signer = await gearKeyringByWalletData(
        WALLET_NAME,
        WALLET_MNEMONIC
    );

    // First command: TrafficLight/Green (ServiceName/MethodName)
    try {
        const response = await commandRed(
            sails,
            signer
        );

        console.log('Response from method "Red": ');
        console.log(response);
    } catch(e) {
        api.provider.disconnect();
        throw e;
    }

    // Second command: TrafficLight/Yellow (ServiceName/MethodName)
    try {
        const response = await commandYellow(
            sails,
            signer
        );

        console.log('Response from method "Yellow": ');
        console.log(response);
    } catch(e) {
        api.provider.disconnect();
        throw e;
    }

    // Third command: TrafficLight/Green (ServiceName/MethodName)
    try {
        const response = await commandGreen(
            sails,
            signer
        );

        console.log('Response from method "Green": ');
        console.log(response);
    } catch(e) {
        api.provider.disconnect();
        throw e;
    }

    // First query: TrafficLight/TrafficLight (ServiceName/MethodName)
    try {
        const response = await queryTrafficLight(
            sails,
            signer.address
        );

        console.log('Response from query "TrafficLight": ');
        console.log(response);
    } catch(e) {
        api.provider.disconnect();
        throw e;
    }

    api.provider.disconnect();
}

main().catch(e => {
    throw e;
});
# Script Node Sails

This script contains necessary functions as well as examples to be able to communicate with a contract, using commands and queries.

## Table of contents:

- [Instalation](#instalation)
- [Setting the environment](#setting-the-environment)
- [Setting the signer](#setting-the-signer)
- [Compilation and execution](#compilation-and-execution)
- [Files](#files)
- [Gitpod](#gitpod)

## Instalation

1. You need to go to the directory where you will download the repository.
2. Once you are in the directory, you need to run the following command in your terminal:

```bash
git clone https://github.com/Vara-Lab/Node-Script-Sails.git
```

3. Next, you have to enter in the directory created by git, using:

```bash
cd Node-Script-Sails/
```

4. WIth this, you can now set the environment!

## Setting the environment

> You need to install Node 18 or above.

- To install the project dependencies, run the following command in your terminal:

```bash
yarn
```

if you don't have yarn installed, you need to execute the next command to install yarn globally:

```bash
npm i -g yarn
```

## Setting the signer

In the script, you will need the wallet data that will sign the messages in the script, you have to set the wallet name and the wallet mnemonic to create the signer from that data.

To set this filds, you have to go to the `src/consts.ts` file, and put the wallet data in the constants: `WALLET_NAME` and `WALLET_MNEMONIC`:

```typescript
export const WALLET_NAME: string = ''; // set the wallet name
export const WALLET_MNEMONIC: string = ''; // set the wallet mnemonic
```

## compilation and execution

To compile your script, you need to run the following command in your terminal:

```bash
yarn tsc
```

And to run the node script, you need to execute the next command in your terminal:

```bash
yarn start
```

With this step, you will see how the commands execute one by one!

## Files

- **commands.ts:** In this file you will find all the commands that you can use in the specified contract (In this case, [Traffic Light contract](https://github.com/Vara-Lab/traffic-light-integration/tree/main/traffic_light_contract)).
- **queries.ts:** In this file you will find all the queries that you can use in the specified contract (In this case, [Traffic Light contract](https://github.com/Vara-Lab/traffic-light-integration/tree/main/traffic_light_contract)).
- **consts.ts:** In this file you will find all the constants that you can use in the script, you can change it to set your contract data.
- **utils.ts:** In this file you will find some helper functions that will help you to handle some common aspects, like create a new GearAPi instance, Sails instance, etc.
- **index.ts:** Here you will find the main functions that will execute the script to send al the messages and queries to the contract.

## Gitpod

You can try the node script on gitpod!, the steps are the same, you can install the project dependencies (gitpod does this for you), compile the script (`yarn tsc`) and run it (`yarn start`)!

<p align="center">
  <a href="https://gitpod.io/#https://github.com/Vara-Lab/Node-Script-Sails.git" target="_blank">
    <img src="https://gitpod.io/button/open-in-gitpod.svg" width="240" alt="Gitpod">
  </a>
</p>
# app

## Default commands

```shell
npm run accounts
npm run compile
npm run clean
npm run test
npm run node
node scripts/deploy.js
npm run help
```

## Generate address smart contract for network rinkeby

```
  npx hardhat run scriptis/deploy.js --network rinkeby
```

## Generate link for transactions on site https://etherscan.io/

```
  npx hardhat verify --network rinkeby <address_smart_contract>
```

## Tests coverage

```
  npx hardhat coverage [command-options] -> https://github.com/sc-forks/solidity-coverage
```

## Completing tasks from hardhat.config.js

```
  npx hardhat <name_task>
```

# app

## Default commands

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/deploy.js
npx hardhat help
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

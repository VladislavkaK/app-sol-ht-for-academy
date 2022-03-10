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

## Tests coverage -> https://github.com/sc-forks/solidity-coverage

```
  npx hardhat coverage --testfiles "test/*.js"
```

## Tasks

```
  get address contract -> npm run deploy:rinkeby
  get total balance -> npx hardhat total-balance --contract 0xf2cDbCAe2ff6324D15Cb93E0D1021B8712E509cc --network rinkeby
```

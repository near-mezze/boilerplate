# Name Of Contract

Brief description of your contract. This is NOT the MezzeTech Tutorial. That will live in its own branch called `mezzetech` in its own folder specific to the `mezzetech` branch: 

<!-- mezzetech branch of your contract repo -->
  contract_root/ // ie. "thanks"
    ┣ src/
    ┃ ┣ mezzetech/
    ┃ ┃ ┣ README.MD // <===== PUT YOUR MEZZETECH TUTORIAL HERE!

## ⚠️ Warning

Any content produced by NEAR, or developer resources that NEAR provides, are for educational and inspiration purposes only.  NEAR does not encourage, induce or sanction the deployment of any such applications in violation of applicable laws or regulations.

## Contract

```ts
// perhaps relevant code here
```

## Usage

### Development

To deploy the contract for development, follow these steps:

1. clone this repo locally
2. run `./scripts/1.dev-deploy.sh` to deploy the contract (this uses `near dev-deploy`)

**Your contract is now ready to use.**

To use the contract you can do any of the following:

_Public scripts_

```sh
# script.sh files used to run public scripts
```

_Owner scripts_

```sh
# script.sh files that only the contract owner can run
```

### Production

It is recommended that you deploy the contract to a subaccount under your MainNet account to make it easier to identify you as the owner

1. clone this repo locally
2. run `./scripts/x-deploy.sh` to rebuild, deploy and initialize the contract to a target account

   requires the following environment variables
   - `NEAR_ENV`: Either `testnet` or `mainnet`
   - `OWNER`: The owner of the contract and the parent account.  The contract will be deployed to `contract_name.$OWNER`

3. run `./scripts/x-remove.sh` to delete the account

   requires the following environment variables
   - `NEAR_ENV`: Either `testnet` or `mainnet`
   - `OWNER`: The owner of the contract and the parent account.  The contract will be deployed to `contract_name.$OWNER`

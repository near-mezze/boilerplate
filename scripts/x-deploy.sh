#!/usr/bin/env bash

# Reaplace NAME_OF_CONTRACT with the name of your contract, e.g. thanks

[ -z "$NEAR_ENV" ] && echo "Missing \$NEAR_ENV environment variable" && exit 1
[ -z "$OWNER" ] && echo "Missing \$OWNER environment variable" && exit 1


# exit on first error after this point
set -e

echo --------------------------------------------
echo
echo "rebuilding the contract (release build)"
echo
yarn build:release

echo --------------------------------------------
echo
echo "creating a subaccount under $OWNER"
echo
near create-account NAME_OF_CONTRACT.$OWNER --masterAccount=$OWNER --initialBalance "1"

echo --------------------------------------------
echo
echo "deploying and initializing the contract in a single transaction"
echo
near deploy --accountId=NAME_OF_CONTRACT.$OWNER --wasmFile=./build/release/NAME_OF_CONTRACT.wasm --initFunction 'init' --initArgs '{"owner":"'$OWNER'"}'

exit 0

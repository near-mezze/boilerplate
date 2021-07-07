#!/usr/bin/env bash
set -e

[ -z "$NEAR_ENV" ] && echo "Missing \$NEAR_ENV environment variable" && exit 1
[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$SPEAKER" ] && echo "Missing \$SPEAKER environment variable" && exit 1

# CHANGE NAME_OF_FUNCTION to the function name you intend to call
# CHANGE argument-key to match the argument in the function you intend to call - e.g contract.sendMessage({"message": "hello world"}) 
echo
echo 'About to call NAME_OF_FUNCTION() on the contract'
echo near call \$CONTRACT NAME_OF_FUNCTION '{"argument-key":"$1"}' --account_id \$SPEAKER --amount \$1
echo
echo \$CONTRACT is $CONTRACT
echo \$SPEAKER is $SPEAKER
echo \$1 is [ $1 ] '(the argument-key)'
echo \$2 is [ $2 NEAR ] '(optionally attached amount)'
echo
near call $CONTRACT NAME_OF_FUNCTION '{"argument-key":"'"$1"'"}' --account_id $SPEAKER --amount $2

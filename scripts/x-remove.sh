#!/usr/bin/env bash
# REPLACE NAME_OF_CONTRACT with the name of your contract, e.g. thanks

[ -z "$NEAR_ENV" ] && echo "Missing \$NEAR_ENV environment variable" && exit 1
[ -z "$OWNER" ] && echo "Missing \$OWNER environment variable" && exit 1

# exit on first error after this point
set -e

echo "deleting NAME_OF_CONTRACT.$OWNER and setting $OWNER as beneficiary"
echo
near delete NAME_OF_CONTRACT.$OWNER $OWNER

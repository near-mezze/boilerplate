import { Context} from "near-sdk-core"
import { VMContext } from "near-sdk-as"
import { Contract } from "../assembly/index"
import { AccountId } from "../../utils"

// use `logging.log()` to log to terminal
// use `log()` to log in testing blocks
// "near call \$CONTRACT init '{\"owner\":\"'\$OWNER'\"}' --accountId \$CONTRACT"

const owner = 'someone'

let contract: Contract;
beforeEach(() => {
  contract = new Contract(owner);
})

// Typical structure
describe('Main Change Function', () => {

  it('Throws if argument is missing', () => {
    expect(() => {
      contract.someChangeFunction({})
    }).toThrow();
  });


});
 

import { Context, ContractPromiseBatch, logging, u128, PersistentVector } from "near-sdk-core"

/**
 * == TYPES ====================================================================
 */

/**
 * Account IDs in NEAR are just strings.
 */
type AccountId = string;

/**
 * Gas is u64
 */
type Gas = u64;

/**
 * Amounts, Balances, and Money in NEAR is are u128.
 */

type Amount = u128;

type Balance = Amount;

type Money = Amount;

/**
 * Timestamp in NEAR is a number.
 */
type Timestamp = u64;

/**
 * == CONSTANTS ================================================================
 *
 * ONE_NEAR = unit of NEAR token in yocto Ⓝ (1e24)
 * XCC_GAS = gas for cross-contract calls, ~5 Tgas (teragas = 1e12) per "hop"
 * MIN_ACCOUNT_BALANCE = 3 NEAR min to keep account alive via storage staking
 */


const ONE_NEAR = u128.from("1000000000000000000000000");
const XCC_GAS: Gas = 20_000_000_000_000;
const MIN_ACCOUNT_BALANCE: u128 = u128.mul(ONE_NEAR, u128.from(3));
// import { Message, ContributionTracker, Vector } from "./models"

// max 5 NEAR accepted to this contract before it forces a transfer to the owner
const CONTRIBUTION_SAFETY_LIMIT: u128 = u128.mul(ONE_NEAR, u128.from(5));
const owner: AccountId = 'YOUR TESTNET ACCOUNT'
const contributions: ContributionTracker = new ContributionTracker()
const messages: Vector<Message> = new Vector<Message>("m")

@nearBindgen
class ContributionTracker {
  public count: u32 = 0;
  public total: u128 = u128.Zero;
  public average: f64;
  public received: u128 = u128.Zero
  public transferred: u128 = u128.Zero

  update(value: u128): void {
    // track money received separately
    this.received = u128.add(this.received, value);

    // update tracking data
    this.count += 1;
    this.total = u128.add(this.total, value);
    this.average = u128.div(this.total, u128.from(this.count)).toF64();
  }

  record_transfer(): void {
    this.transferred = u128.add(this.transferred, this.received)
    this.received = u128.Zero
  }
}

/**
 * A message left by someone saying thanks
 */
@nearBindgen
class Message {
  public static max_length(): i32 { return 100 as i32 };

  public sender: AccountId

  constructor(
    public text: string,
    anonymous: bool = false,
    public contribution: u128 = u128.Zero
  ) {
    this.sender = anonymous ? '' : Context.sender
  }
}

/**
 * setup a generic subclass instead of duplicating the get_last method
 */
@nearBindgen
class Vector<T> extends PersistentVector<T> {
  /**
   * this method isn't normally available on a PersistentVector
   * so we add it here to make our lives easier when returning the
   * last `n` items for comments, votes and donations
   * @param count
   */
  get_last(count: i32): Array<T> {
    const n = min(count, this.length);
    const startIndex = this.length - n;
    const result = new Array<T>();
    for (let i = startIndex; i < this.length; i++) {
      const entry = this[i];
      result.push(entry);
    }
    return result;
  }
}

function _assert_financial_safety_limits(deposit: u128): void {
  const new_total = u128.add(deposit, contributions.received)
  assert(u128.le(deposit, CONTRIBUTION_SAFETY_LIMIT), "You are trying to attach too many NEAR Tokens to this call.  There is a safe limit while in beta of 5 NEAR")
  assert(u128.le(new_total, CONTRIBUTION_SAFETY_LIMIT), "Maximum contributions reached.  Please call transfer() to continue receiving funds.")
}

export function say(message: string, anonymous: bool = false): bool {
  // guard against too much money being deposited to this account in beta
  const deposit = Context.attachedDeposit
  _assert_financial_safety_limits(deposit)

  // guard against invalid message size
  assert(message.length > 0, "Message length cannot be 0")
  assert(message.length < Message.max_length(), "Message length is too long, must be less than " + Message.max_length().toString() + " characters.")

  if (!anonymous) {
    assert(!anonymous, "Anonymous messages are not allowed by this contract")
  }

  if (deposit > u128.Zero) {
    contributions.update(deposit)
  }

  messages.pushBack(new Message(message, anonymous, deposit))
  return true
}

export function list(): Array<Message> {
  _assert_owner()
  return messages.get_last(10)
}

function _assert_owner(): void {
  const caller = Context.predecessor
  assert(owner == caller, "Only the owner of this contract may call this method")
}

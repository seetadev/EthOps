// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Reward extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("title", Value.fromBytes(Bytes.empty()));
    this.set("description", Value.fromBytes(Bytes.empty()));
    this.set("url", Value.fromBytes(Bytes.empty()));
    this.set("admin", Value.fromString(""));
    this.set("tokenImpl", Value.fromString(""));
    this.set("optimisticOracleImpl", Value.fromString(""));
    this.set("rewardAmount", Value.fromBigInt(BigInt.zero()));
    this.set("currentdeposit", Value.fromBigInt(BigInt.zero()));
    this.set("rewardStatus", Value.fromBigInt(BigInt.zero()));
    this.set("rewardStep", Value.fromBigInt(BigInt.zero()));
    this.set("earliestNextAction", Value.fromBigInt(BigInt.zero()));
    this.set("interval", Value.fromBigInt(BigInt.zero()));
    this.set("target", Value.fromBigInt(BigInt.zero()));
    this.set("targetCondition", Value.fromBigInt(BigInt.zero()));
    this.set("priceType", Value.fromBigInt(BigInt.zero()));
    this.set("optimisticOracleLivenessTime", Value.fromBigInt(BigInt.zero()));
    this.set("totalDistributed", Value.fromBigInt(BigInt.zero()));
    this.set("currentIndex", Value.fromBigInt(BigInt.zero()));
    this.set("unitsIssued", Value.fromBigInt(BigInt.zero()));
    this.set("userMemberships", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Reward entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Reward entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Reward", id.toString(), this);
    }
  }

  static load(id: string): Reward | null {
    return changetype<Reward | null>(store.get("Reward", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get title(): Bytes {
    let value = this.get("title");
    return value!.toBytes();
  }

  set title(value: Bytes) {
    this.set("title", Value.fromBytes(value));
  }

  get description(): Bytes {
    let value = this.get("description");
    return value!.toBytes();
  }

  set description(value: Bytes) {
    this.set("description", Value.fromBytes(value));
  }

  get url(): Bytes {
    let value = this.get("url");
    return value!.toBytes();
  }

  set url(value: Bytes) {
    this.set("url", Value.fromBytes(value));
  }

  get admin(): string {
    let value = this.get("admin");
    return value!.toString();
  }

  set admin(value: string) {
    this.set("admin", Value.fromString(value));
  }

  get tokenImpl(): string {
    let value = this.get("tokenImpl");
    return value!.toString();
  }

  set tokenImpl(value: string) {
    this.set("tokenImpl", Value.fromString(value));
  }

  get optimisticOracleImpl(): string {
    let value = this.get("optimisticOracleImpl");
    return value!.toString();
  }

  set optimisticOracleImpl(value: string) {
    this.set("optimisticOracleImpl", Value.fromString(value));
  }

  get rewardToken(): string | null {
    let value = this.get("rewardToken");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set rewardToken(value: string | null) {
    if (!value) {
      this.unset("rewardToken");
    } else {
      this.set("rewardToken", Value.fromString(<string>value));
    }
  }

  get rewardAmount(): BigInt {
    let value = this.get("rewardAmount");
    return value!.toBigInt();
  }

  set rewardAmount(value: BigInt) {
    this.set("rewardAmount", Value.fromBigInt(value));
  }

  get token(): string | null {
    let value = this.get("token");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set token(value: string | null) {
    if (!value) {
      this.unset("token");
    } else {
      this.set("token", Value.fromString(<string>value));
    }
  }

  get currentdeposit(): BigInt {
    let value = this.get("currentdeposit");
    return value!.toBigInt();
  }

  set currentdeposit(value: BigInt) {
    this.set("currentdeposit", Value.fromBigInt(value));
  }

  get rewardStatus(): BigInt {
    let value = this.get("rewardStatus");
    return value!.toBigInt();
  }

  set rewardStatus(value: BigInt) {
    this.set("rewardStatus", Value.fromBigInt(value));
  }

  get rewardStep(): BigInt {
    let value = this.get("rewardStep");
    return value!.toBigInt();
  }

  set rewardStep(value: BigInt) {
    this.set("rewardStep", Value.fromBigInt(value));
  }

  get earliestNextAction(): BigInt {
    let value = this.get("earliestNextAction");
    return value!.toBigInt();
  }

  set earliestNextAction(value: BigInt) {
    this.set("earliestNextAction", Value.fromBigInt(value));
  }

  get interval(): BigInt {
    let value = this.get("interval");
    return value!.toBigInt();
  }

  set interval(value: BigInt) {
    this.set("interval", Value.fromBigInt(value));
  }

  get target(): BigInt {
    let value = this.get("target");
    return value!.toBigInt();
  }

  set target(value: BigInt) {
    this.set("target", Value.fromBigInt(value));
  }

  get targetCondition(): BigInt {
    let value = this.get("targetCondition");
    return value!.toBigInt();
  }

  set targetCondition(value: BigInt) {
    this.set("targetCondition", Value.fromBigInt(value));
  }

  get priceType(): BigInt {
    let value = this.get("priceType");
    return value!.toBigInt();
  }

  set priceType(value: BigInt) {
    this.set("priceType", Value.fromBigInt(value));
  }

  get optimisticOracleLivenessTime(): BigInt {
    let value = this.get("optimisticOracleLivenessTime");
    return value!.toBigInt();
  }

  set optimisticOracleLivenessTime(value: BigInt) {
    this.set("optimisticOracleLivenessTime", Value.fromBigInt(value));
  }

  get priceIdentifier(): Bytes | null {
    let value = this.get("priceIdentifier");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set priceIdentifier(value: Bytes | null) {
    if (!value) {
      this.unset("priceIdentifier");
    } else {
      this.set("priceIdentifier", Value.fromBytes(<Bytes>value));
    }
  }

  get customAncillaryData(): Bytes | null {
    let value = this.get("customAncillaryData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set customAncillaryData(value: Bytes | null) {
    if (!value) {
      this.unset("customAncillaryData");
    } else {
      this.set("customAncillaryData", Value.fromBytes(<Bytes>value));
    }
  }

  get totalDistributed(): BigInt {
    let value = this.get("totalDistributed");
    return value!.toBigInt();
  }

  set totalDistributed(value: BigInt) {
    this.set("totalDistributed", Value.fromBigInt(value));
  }

  get currentIndex(): BigInt {
    let value = this.get("currentIndex");
    return value!.toBigInt();
  }

  set currentIndex(value: BigInt) {
    this.set("currentIndex", Value.fromBigInt(value));
  }

  get unitsIssued(): BigInt {
    let value = this.get("unitsIssued");
    return value!.toBigInt();
  }

  set unitsIssued(value: BigInt) {
    this.set("unitsIssued", Value.fromBigInt(value));
  }

  get userMemberships(): BigInt {
    let value = this.get("userMemberships");
    return value!.toBigInt();
  }

  set userMemberships(value: BigInt) {
    this.set("userMemberships", Value.fromBigInt(value));
  }

  get currentProposal(): string | null {
    let value = this.get("currentProposal");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set currentProposal(value: string | null) {
    if (!value) {
      this.unset("currentProposal");
    } else {
      this.set("currentProposal", Value.fromString(<string>value));
    }
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save User entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get rewardsCreated(): Array<string> | null {
    let value = this.get("rewardsCreated");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set rewardsCreated(value: Array<string> | null) {
    if (!value) {
      this.unset("rewardsCreated");
    } else {
      this.set("rewardsCreated", Value.fromStringArray(<Array<string>>value));
    }
  }

  get rewardsMembership(): Array<string> | null {
    let value = this.get("rewardsMembership");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set rewardsMembership(value: Array<string> | null) {
    if (!value) {
      this.unset("rewardsMembership");
    } else {
      this.set(
        "rewardsMembership",
        Value.fromStringArray(<Array<string>>value)
      );
    }
  }

  get proposaslsSubmitted(): Array<string> | null {
    let value = this.get("proposaslsSubmitted");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set proposaslsSubmitted(value: Array<string> | null) {
    if (!value) {
      this.unset("proposaslsSubmitted");
    } else {
      this.set(
        "proposaslsSubmitted",
        Value.fromStringArray(<Array<string>>value)
      );
    }
  }
}

export class UserMembership extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("beneficiary", Value.fromString(""));
    this.set("reward", Value.fromString(""));
    this.set("units", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserMembership entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save UserMembership entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("UserMembership", id.toString(), this);
    }
  }

  static load(id: string): UserMembership | null {
    return changetype<UserMembership | null>(store.get("UserMembership", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get beneficiary(): string {
    let value = this.get("beneficiary");
    return value!.toString();
  }

  set beneficiary(value: string) {
    this.set("beneficiary", Value.fromString(value));
  }

  get reward(): string {
    let value = this.get("reward");
    return value!.toString();
  }

  set reward(value: string) {
    this.set("reward", Value.fromString(value));
  }

  get units(): BigInt {
    let value = this.get("units");
    return value!.toBigInt();
  }

  set units(value: BigInt) {
    this.set("units", Value.fromBigInt(value));
  }
}

export class RewardIndexHistory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("rewardId", Value.fromString(""));
    this.set("rewardAmount", Value.fromBigInt(BigInt.zero()));
    this.set("index", Value.fromBigInt(BigInt.zero()));
    this.set("timeStamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RewardIndexHistory entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save RewardIndexHistory entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("RewardIndexHistory", id.toString(), this);
    }
  }

  static load(id: string): RewardIndexHistory | null {
    return changetype<RewardIndexHistory | null>(
      store.get("RewardIndexHistory", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get rewardId(): string {
    let value = this.get("rewardId");
    return value!.toString();
  }

  set rewardId(value: string) {
    this.set("rewardId", Value.fromString(value));
  }

  get rewardAmount(): BigInt {
    let value = this.get("rewardAmount");
    return value!.toBigInt();
  }

  set rewardAmount(value: BigInt) {
    this.set("rewardAmount", Value.fromBigInt(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value!.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get timeStamp(): BigInt {
    let value = this.get("timeStamp");
    return value!.toBigInt();
  }

  set timeStamp(value: BigInt) {
    this.set("timeStamp", Value.fromBigInt(value));
  }
}

export class Proposal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("proposer", Value.fromString(""));
    this.set("startQualifying", Value.fromBigInt(BigInt.zero()));
    this.set("startLivenessPeriod", Value.fromBigInt(BigInt.zero()));
    this.set("priceProposed", Value.fromBigInt(BigInt.zero()));
    this.set("priceResolved", Value.fromBigInt(BigInt.zero()));
    this.set("rewardId", Value.fromString(""));
    this.set("proposalId", Value.fromString(""));
    this.set("status", Value.fromString(""));
    this.set("target", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Proposal entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Proposal entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Proposal", id.toString(), this);
    }
  }

  static load(id: string): Proposal | null {
    return changetype<Proposal | null>(store.get("Proposal", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get proposer(): string {
    let value = this.get("proposer");
    return value!.toString();
  }

  set proposer(value: string) {
    this.set("proposer", Value.fromString(value));
  }

  get startQualifying(): BigInt {
    let value = this.get("startQualifying");
    return value!.toBigInt();
  }

  set startQualifying(value: BigInt) {
    this.set("startQualifying", Value.fromBigInt(value));
  }

  get startLivenessPeriod(): BigInt {
    let value = this.get("startLivenessPeriod");
    return value!.toBigInt();
  }

  set startLivenessPeriod(value: BigInt) {
    this.set("startLivenessPeriod", Value.fromBigInt(value));
  }

  get priceProposed(): BigInt {
    let value = this.get("priceProposed");
    return value!.toBigInt();
  }

  set priceProposed(value: BigInt) {
    this.set("priceProposed", Value.fromBigInt(value));
  }

  get priceResolved(): BigInt {
    let value = this.get("priceResolved");
    return value!.toBigInt();
  }

  set priceResolved(value: BigInt) {
    this.set("priceResolved", Value.fromBigInt(value));
  }

  get rewardId(): string {
    let value = this.get("rewardId");
    return value!.toString();
  }

  set rewardId(value: string) {
    this.set("rewardId", Value.fromString(value));
  }

  get proposalId(): string {
    let value = this.get("proposalId");
    return value!.toString();
  }

  set proposalId(value: string) {
    this.set("proposalId", Value.fromString(value));
  }

  get timeStamp(): BigInt | null {
    let value = this.get("timeStamp");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timeStamp(value: BigInt | null) {
    if (!value) {
      this.unset("timeStamp");
    } else {
      this.set("timeStamp", Value.fromBigInt(<BigInt>value));
    }
  }

  get status(): string {
    let value = this.get("status");
    return value!.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }

  get target(): BigInt {
    let value = this.get("target");
    return value!.toBigInt();
  }

  set target(value: BigInt) {
    this.set("target", Value.fromBigInt(value));
  }
}
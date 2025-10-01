/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  TheCompact,
  TheCompact_AllocatorRegistered,
  TheCompact_Approval,
  TheCompact_Claim,
  TheCompact_CompactRegistered,
  TheCompact_EmissaryAssigned,
  TheCompact_EmissaryAssignmentScheduled,
  TheCompact_ForcedWithdrawalStatusUpdated,
  TheCompact_NonceConsumedDirectly,
  TheCompact_OperatorSet,
  TheCompact_Transfer,
} from "generated";

TheCompact.AllocatorRegistered.handler(async ({ event, context }) => {
  const entity: TheCompact_AllocatorRegistered = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    allocatorId: event.params.allocatorId,
    allocator: event.params.allocator,
  };

  context.TheCompact_AllocatorRegistered.set(entity);
});

TheCompact.Approval.handler(async ({ event, context }) => {
  const entity: TheCompact_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    event_id: event.params.id,
    amount: event.params.amount,
  };

  context.TheCompact_Approval.set(entity);
});

TheCompact.Claim.handler(async ({ event, context }) => {
  const entity: TheCompact_Claim = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sponsor: event.params.sponsor,
    allocator: event.params.allocator,
    arbiter: event.params.arbiter,
    claimHash: event.params.claimHash,
    nonce: event.params.nonce,
  };

  context.TheCompact_Claim.set(entity);
});

TheCompact.CompactRegistered.handler(async ({ event, context }) => {
  const entity: TheCompact_CompactRegistered = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sponsor: event.params.sponsor,
    claimHash: event.params.claimHash,
    typehash: event.params.typehash,
  };

  context.TheCompact_CompactRegistered.set(entity);
});

TheCompact.EmissaryAssigned.handler(async ({ event, context }) => {
  const entity: TheCompact_EmissaryAssigned = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sponsor: event.params.sponsor,
    lockTag: event.params.lockTag,
    emissary: event.params.emissary,
  };

  context.TheCompact_EmissaryAssigned.set(entity);
});

TheCompact.EmissaryAssignmentScheduled.handler(async ({ event, context }) => {
  const entity: TheCompact_EmissaryAssignmentScheduled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sponsor: event.params.sponsor,
    lockTag: event.params.lockTag,
    assignableAt: event.params.assignableAt,
  };

  context.TheCompact_EmissaryAssignmentScheduled.set(entity);
});

TheCompact.ForcedWithdrawalStatusUpdated.handler(async ({ event, context }) => {
  const entity: TheCompact_ForcedWithdrawalStatusUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
    event_id: event.params.id,
    activating: event.params.activating,
    withdrawableAt: event.params.withdrawableAt,
  };

  context.TheCompact_ForcedWithdrawalStatusUpdated.set(entity);
});

TheCompact.NonceConsumedDirectly.handler(async ({ event, context }) => {
  const entity: TheCompact_NonceConsumedDirectly = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    allocator: event.params.allocator,
    nonce: event.params.nonce,
  };

  context.TheCompact_NonceConsumedDirectly.set(entity);
});

TheCompact.OperatorSet.handler(async ({ event, context }) => {
  const entity: TheCompact_OperatorSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    operator: event.params.operator,
    approved: event.params.approved,
  };

  context.TheCompact_OperatorSet.set(entity);
});

TheCompact.Transfer.handler(async ({ event, context }) => {
  const entity: TheCompact_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    by: event.params.by,
    from: event.params.from,
    to: event.params.to,
    event_id: event.params.id,
    amount: event.params.amount,
  };

  context.TheCompact_Transfer.set(entity);
});

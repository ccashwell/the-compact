//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TheCompact
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x00000000000000171ede64904551eedf3c6c9788)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000000000171ede64904551eedf3c6c9788)
 * - [__View Contract on Unichain Uniscan__](https://uniscan.xyz/address/0x00000000000000171ede64904551eedf3c6c9788)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x00000000000000171ede64904551eedf3c6c9788)
 */
export const theCompactAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: '__activateTstore',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: '__benchmark',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'allocator', internalType: 'address', type: 'address' },
      { name: 'proof', internalType: 'bytes', type: 'bytes' },
    ],
    name: '__registerAllocator',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'transfer',
        internalType: 'struct AllocatedBatchTransfer',
        type: 'tuple',
        components: [
          { name: 'allocatorData', internalType: 'bytes', type: 'bytes' },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'expires', internalType: 'uint256', type: 'uint256' },
          {
            name: 'transfers',
            internalType: 'struct ComponentsById[]',
            type: 'tuple[]',
            components: [
              { name: 'id', internalType: 'uint256', type: 'uint256' },
              {
                name: 'portions',
                internalType: 'struct Component[]',
                type: 'tuple[]',
                components: [
                  {
                    name: 'claimant',
                    internalType: 'uint256',
                    type: 'uint256',
                  },
                  { name: 'amount', internalType: 'uint256', type: 'uint256' },
                ],
              },
            ],
          },
        ],
      },
    ],
    name: 'allocatedBatchTransfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'transfer',
        internalType: 'struct AllocatedTransfer',
        type: 'tuple',
        components: [
          { name: 'allocatorData', internalType: 'bytes', type: 'bytes' },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'expires', internalType: 'uint256', type: 'uint256' },
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          {
            name: 'recipients',
            internalType: 'struct Component[]',
            type: 'tuple[]',
            components: [
              { name: 'claimant', internalType: 'uint256', type: 'uint256' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
    ],
    name: 'allocatedTransfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'allowance',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lockTag', internalType: 'bytes12', type: 'bytes12' },
      { name: 'emissary', internalType: 'address', type: 'address' },
    ],
    name: 'assignEmissary',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'claimPayload',
        internalType: 'struct BatchClaim',
        type: 'tuple',
        components: [
          { name: 'allocatorData', internalType: 'bytes', type: 'bytes' },
          { name: 'sponsorSignature', internalType: 'bytes', type: 'bytes' },
          { name: 'sponsor', internalType: 'address', type: 'address' },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'expires', internalType: 'uint256', type: 'uint256' },
          { name: 'witness', internalType: 'bytes32', type: 'bytes32' },
          { name: 'witnessTypestring', internalType: 'string', type: 'string' },
          {
            name: 'claims',
            internalType: 'struct BatchClaimComponent[]',
            type: 'tuple[]',
            components: [
              { name: 'id', internalType: 'uint256', type: 'uint256' },
              {
                name: 'allocatedAmount',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'portions',
                internalType: 'struct Component[]',
                type: 'tuple[]',
                components: [
                  {
                    name: 'claimant',
                    internalType: 'uint256',
                    type: 'uint256',
                  },
                  { name: 'amount', internalType: 'uint256', type: 'uint256' },
                ],
              },
            ],
          },
        ],
      },
    ],
    name: 'batchClaim',
    outputs: [{ name: 'claimHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'idsAndAmounts',
        internalType: 'uint256[2][]',
        type: 'uint256[2][]',
      },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'batchDeposit',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'idsAndAmounts',
        internalType: 'uint256[2][]',
        type: 'uint256[2][]',
      },
      { name: 'arbiter', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expires', internalType: 'uint256', type: 'uint256' },
      { name: 'typehash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'witness', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'batchDepositAndRegisterFor',
    outputs: [
      { name: 'claimHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'registeredAmounts',
        internalType: 'uint256[]',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'idsAndAmounts',
        internalType: 'uint256[2][]',
        type: 'uint256[2][]',
      },
      {
        name: 'claimHashesAndTypehashes',
        internalType: 'bytes32[2][]',
        type: 'bytes32[2][]',
      },
    ],
    name: 'batchDepositAndRegisterMultiple',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'depositor', internalType: 'address', type: 'address' },
      {
        name: 'permitted',
        internalType: 'struct ISignatureTransfer.TokenPermissions[]',
        type: 'tuple[]',
        components: [
          { name: 'token', internalType: 'address', type: 'address' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
      },
      {
        name: '',
        internalType: 'struct DepositDetails',
        type: 'tuple',
        components: [
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
          { name: 'lockTag', internalType: 'bytes12', type: 'bytes12' },
        ],
      },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'enum CompactCategory', type: 'uint8' },
      { name: 'witness', internalType: 'string', type: 'string' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'batchDepositAndRegisterViaPermit2',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      {
        name: 'permitted',
        internalType: 'struct ISignatureTransfer.TokenPermissions[]',
        type: 'tuple[]',
        components: [
          { name: 'token', internalType: 'address', type: 'address' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
      },
      {
        name: '',
        internalType: 'struct DepositDetails',
        type: 'tuple',
        components: [
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
          { name: 'lockTag', internalType: 'bytes12', type: 'bytes12' },
        ],
      },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'batchDepositViaPermit2',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'claimPayload',
        internalType: 'struct BatchMultichainClaim',
        type: 'tuple',
        components: [
          { name: 'allocatorData', internalType: 'bytes', type: 'bytes' },
          { name: 'sponsorSignature', internalType: 'bytes', type: 'bytes' },
          { name: 'sponsor', internalType: 'address', type: 'address' },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'expires', internalType: 'uint256', type: 'uint256' },
          { name: 'witness', internalType: 'bytes32', type: 'bytes32' },
          { name: 'witnessTypestring', internalType: 'string', type: 'string' },
          {
            name: 'claims',
            internalType: 'struct BatchClaimComponent[]',
            type: 'tuple[]',
            components: [
              { name: 'id', internalType: 'uint256', type: 'uint256' },
              {
                name: 'allocatedAmount',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'portions',
                internalType: 'struct Component[]',
                type: 'tuple[]',
                components: [
                  {
                    name: 'claimant',
                    internalType: 'uint256',
                    type: 'uint256',
                  },
                  { name: 'amount', internalType: 'uint256', type: 'uint256' },
                ],
              },
            ],
          },
          {
            name: 'additionalChains',
            internalType: 'bytes32[]',
            type: 'bytes32[]',
          },
        ],
      },
    ],
    name: 'batchMultichainClaim',
    outputs: [{ name: 'claimHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'claimPayload',
        internalType: 'struct Claim',
        type: 'tuple',
        components: [
          { name: 'allocatorData', internalType: 'bytes', type: 'bytes' },
          { name: 'sponsorSignature', internalType: 'bytes', type: 'bytes' },
          { name: 'sponsor', internalType: 'address', type: 'address' },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'expires', internalType: 'uint256', type: 'uint256' },
          { name: 'witness', internalType: 'bytes32', type: 'bytes32' },
          { name: 'witnessTypestring', internalType: 'string', type: 'string' },
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'allocatedAmount', internalType: 'uint256', type: 'uint256' },
          {
            name: 'claimants',
            internalType: 'struct Component[]',
            type: 'tuple[]',
            components: [
              { name: 'claimant', internalType: 'uint256', type: 'uint256' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
    ],
    name: 'claim',
    outputs: [{ name: 'claimHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'nonces', internalType: 'uint256[]', type: 'uint256[]' }],
    name: 'consume',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'lockTag', internalType: 'bytes12', type: 'bytes12' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'depositERC20',
    outputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'lockTag', internalType: 'bytes12', type: 'bytes12' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'claimHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'typehash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'depositERC20AndRegister',
    outputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'lockTag', internalType: 'bytes12', type: 'bytes12' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'arbiter', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expires', internalType: 'uint256', type: 'uint256' },
      { name: 'typehash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'witness', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'depositERC20AndRegisterFor',
    outputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'claimHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'registeredAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'permit',
        internalType: 'struct ISignatureTransfer.PermitTransferFrom',
        type: 'tuple',
        components: [
          {
            name: 'permitted',
            internalType: 'struct ISignatureTransfer.TokenPermissions',
            type: 'tuple',
            components: [
              { name: 'token', internalType: 'address', type: 'address' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
            ],
          },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'depositor', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes12', type: 'bytes12' },
      { name: 'claimHash', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'enum CompactCategory', type: 'uint8' },
      { name: 'witness', internalType: 'string', type: 'string' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'depositERC20AndRegisterViaPermit2',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'permit',
        internalType: 'struct ISignatureTransfer.PermitTransferFrom',
        type: 'tuple',
        components: [
          {
            name: 'permitted',
            internalType: 'struct ISignatureTransfer.TokenPermissions',
            type: 'tuple',
            components: [
              { name: 'token', internalType: 'address', type: 'address' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
            ],
          },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes12', type: 'bytes12' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'depositERC20ViaPermit2',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lockTag', internalType: 'bytes12', type: 'bytes12' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'depositNative',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lockTag', internalType: 'bytes12', type: 'bytes12' },
      { name: 'claimHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'typehash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'depositNativeAndRegister',
    outputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'lockTag', internalType: 'bytes12', type: 'bytes12' },
      { name: 'arbiter', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expires', internalType: 'uint256', type: 'uint256' },
      { name: 'typehash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'witness', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'depositNativeAndRegisterFor',
    outputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'claimHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'disableForcedWithdrawal',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'enableForcedWithdrawal',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'claimPayload',
        internalType: 'struct ExogenousBatchMultichainClaim',
        type: 'tuple',
        components: [
          { name: 'allocatorData', internalType: 'bytes', type: 'bytes' },
          { name: 'sponsorSignature', internalType: 'bytes', type: 'bytes' },
          { name: 'sponsor', internalType: 'address', type: 'address' },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'expires', internalType: 'uint256', type: 'uint256' },
          { name: 'witness', internalType: 'bytes32', type: 'bytes32' },
          { name: 'witnessTypestring', internalType: 'string', type: 'string' },
          {
            name: 'claims',
            internalType: 'struct BatchClaimComponent[]',
            type: 'tuple[]',
            components: [
              { name: 'id', internalType: 'uint256', type: 'uint256' },
              {
                name: 'allocatedAmount',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'portions',
                internalType: 'struct Component[]',
                type: 'tuple[]',
                components: [
                  {
                    name: 'claimant',
                    internalType: 'uint256',
                    type: 'uint256',
                  },
                  { name: 'amount', internalType: 'uint256', type: 'uint256' },
                ],
              },
            ],
          },
          {
            name: 'additionalChains',
            internalType: 'bytes32[]',
            type: 'bytes32[]',
          },
          { name: 'chainIndex', internalType: 'uint256', type: 'uint256' },
          {
            name: 'notarizedChainId',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
    ],
    name: 'exogenousBatchClaim',
    outputs: [{ name: 'claimHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'claimPayload',
        internalType: 'struct ExogenousMultichainClaim',
        type: 'tuple',
        components: [
          { name: 'allocatorData', internalType: 'bytes', type: 'bytes' },
          { name: 'sponsorSignature', internalType: 'bytes', type: 'bytes' },
          { name: 'sponsor', internalType: 'address', type: 'address' },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'expires', internalType: 'uint256', type: 'uint256' },
          { name: 'witness', internalType: 'bytes32', type: 'bytes32' },
          { name: 'witnessTypestring', internalType: 'string', type: 'string' },
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'allocatedAmount', internalType: 'uint256', type: 'uint256' },
          {
            name: 'claimants',
            internalType: 'struct Component[]',
            type: 'tuple[]',
            components: [
              { name: 'claimant', internalType: 'uint256', type: 'uint256' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'additionalChains',
            internalType: 'bytes32[]',
            type: 'bytes32[]',
          },
          { name: 'chainIndex', internalType: 'uint256', type: 'uint256' },
          {
            name: 'notarizedChainId',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
    ],
    name: 'exogenousClaim',
    outputs: [{ name: 'claimHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
    name: 'extsload',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'slots', internalType: 'bytes32[]', type: 'bytes32[]' }],
    name: 'extsload',
    outputs: [{ name: '', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
    name: 'exttload',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'forcedWithdrawal',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sponsor', internalType: 'address', type: 'address' },
      { name: 'lockTag', internalType: 'bytes12', type: 'bytes12' },
    ],
    name: 'getEmissaryStatus',
    outputs: [
      { name: 'status', internalType: 'enum EmissaryStatus', type: 'uint8' },
      {
        name: 'emissaryAssignmentAvailableAt',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'currentEmissary', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getForcedWithdrawalStatus',
    outputs: [
      { name: '', internalType: 'enum ForcedWithdrawalStatus', type: 'uint8' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'getLockDetails',
    outputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'enum ResetPeriod', type: 'uint8' },
      { name: '', internalType: 'enum Scope', type: 'uint8' },
      { name: '', internalType: 'bytes12', type: 'bytes12' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getRequiredWithdrawalFallbackStipends',
    outputs: [
      { name: 'nativeTokenStipend', internalType: 'uint256', type: 'uint256' },
      { name: 'erc20TokenStipend', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'allocator', internalType: 'address', type: 'address' },
    ],
    name: 'hasConsumedAllocatorNonce',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'isOperator',
    outputs: [{ name: 'status', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sponsor', internalType: 'address', type: 'address' },
      { name: 'claimHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'typehash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'isRegistered',
    outputs: [{ name: 'isActive', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'claimPayload',
        internalType: 'struct MultichainClaim',
        type: 'tuple',
        components: [
          { name: 'allocatorData', internalType: 'bytes', type: 'bytes' },
          { name: 'sponsorSignature', internalType: 'bytes', type: 'bytes' },
          { name: 'sponsor', internalType: 'address', type: 'address' },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'expires', internalType: 'uint256', type: 'uint256' },
          { name: 'witness', internalType: 'bytes32', type: 'bytes32' },
          { name: 'witnessTypestring', internalType: 'string', type: 'string' },
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'allocatedAmount', internalType: 'uint256', type: 'uint256' },
          {
            name: 'claimants',
            internalType: 'struct Component[]',
            type: 'tuple[]',
            components: [
              { name: 'claimant', internalType: 'uint256', type: 'uint256' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'additionalChains',
            internalType: 'bytes32[]',
            type: 'bytes32[]',
          },
        ],
      },
    ],
    name: 'multichainClaim',
    outputs: [{ name: 'claimHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'claimHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'typehash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'register',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'typehash', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'address', type: 'address' },
      { name: 'sponsor', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: 'sponsorSignature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'registerBatchFor',
    outputs: [{ name: 'claimHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'typehash', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'address', type: 'address' },
      { name: 'sponsor', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes12', type: 'bytes12' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: 'sponsorSignature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'registerFor',
    outputs: [{ name: 'claimHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'typehash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'sponsor', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: 'notarizedChainId', internalType: 'uint256', type: 'uint256' },
      { name: 'sponsorSignature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'registerMultichainFor',
    outputs: [{ name: 'claimHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'claimHashesAndTypehashes',
        internalType: 'bytes32[2][]',
        type: 'bytes32[2][]',
      },
    ],
    name: 'registerMultiple',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'lockTag', internalType: 'bytes12', type: 'bytes12' }],
    name: 'scheduleEmissaryAssignment',
    outputs: [
      {
        name: 'emissaryAssignmentAvailableAt',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setOperator',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'payable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'allocatorId',
        internalType: 'uint96',
        type: 'uint96',
        indexed: false,
      },
      {
        name: 'allocator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AllocatorRegistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sponsor',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'allocator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'arbiter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'claimHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'nonce',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Claim',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sponsor',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'claimHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'typehash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'CompactRegistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sponsor',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'lockTag',
        internalType: 'bytes12',
        type: 'bytes12',
        indexed: true,
      },
      {
        name: 'emissary',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'EmissaryAssigned',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sponsor',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'lockTag',
        internalType: 'bytes12',
        type: 'bytes12',
        indexed: true,
      },
      {
        name: 'assignableAt',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'EmissaryAssignmentScheduled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'activating',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
      {
        name: 'withdrawableAt',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ForcedWithdrawalStatusUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'allocator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'nonce',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'NonceConsumedDirectly',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'OperatorSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'by', internalType: 'address', type: 'address', indexed: false },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'allocatedAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'providedAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'AllocatedAmountExceeded',
  },
  { type: 'error', inputs: [], name: 'BalanceOverflow' },
  { type: 'error', inputs: [], name: 'ChainIndexOutOfRange' },
  {
    type: 'error',
    inputs: [
      { name: 'assignableAt', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'EmissaryAssignmentUnavailable',
  },
  {
    type: 'error',
    inputs: [{ name: 'expiration', internalType: 'uint256', type: 'uint256' }],
    name: 'Expired',
  },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ForcedWithdrawalAlreadyDisabled',
  },
  { type: 'error', inputs: [], name: 'ForcedWithdrawalFailed' },
  { type: 'error', inputs: [], name: 'InconsistentAllocators' },
  { type: 'error', inputs: [], name: 'InsufficientBalance' },
  { type: 'error', inputs: [], name: 'InsufficientPermission' },
  {
    type: 'error',
    inputs: [{ name: 'allocator', internalType: 'address', type: 'address' }],
    name: 'InvalidAllocation',
  },
  { type: 'error', inputs: [], name: 'InvalidBatchAllocation' },
  { type: 'error', inputs: [], name: 'InvalidBatchDepositStructure' },
  { type: 'error', inputs: [], name: 'InvalidDepositBalanceChange' },
  { type: 'error', inputs: [], name: 'InvalidDepositTokenOrdering' },
  { type: 'error', inputs: [], name: 'InvalidEmissaryAssignment' },
  { type: 'error', inputs: [], name: 'InvalidLockTag' },
  {
    type: 'error',
    inputs: [{ name: 'allocator', internalType: 'address', type: 'address' }],
    name: 'InvalidRegistrationProof',
  },
  {
    type: 'error',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'InvalidScope',
  },
  { type: 'error', inputs: [], name: 'InvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'InvalidToken',
  },
  { type: 'error', inputs: [], name: 'NoIdsAndAmountsProvided' },
  { type: 'error', inputs: [], name: 'Permit2CallFailed' },
  {
    type: 'error',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'PrematureWithdrawal',
  },
  {
    type: 'error',
    inputs: [
      { name: 'existingCaller', internalType: 'address', type: 'address' },
    ],
    name: 'ReentrantCall',
  },
  { type: 'error', inputs: [], name: 'TStoreAlreadyActivated' },
  { type: 'error', inputs: [], name: 'TStoreNotSupported' },
  { type: 'error', inputs: [], name: 'TloadTestContractDeploymentFailed' },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'UnallocatedTransfer',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x00000000000000171ede64904551eedf3c6c9788)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000000000171ede64904551eedf3c6c9788)
 * - [__View Contract on Unichain Uniscan__](https://uniscan.xyz/address/0x00000000000000171ede64904551eedf3c6c9788)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x00000000000000171ede64904551eedf3c6c9788)
 */
export const theCompactAddress = {
  1: '0x00000000000000171ede64904551eeDF3C6C9788',
  10: '0x00000000000000171ede64904551eeDF3C6C9788',
  130: '0x00000000000000171ede64904551eeDF3C6C9788',
  42161: '0x00000000000000171ede64904551eeDF3C6C9788',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x00000000000000171ede64904551eedf3c6c9788)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x00000000000000171ede64904551eedf3c6c9788)
 * - [__View Contract on Unichain Uniscan__](https://uniscan.xyz/address/0x00000000000000171ede64904551eedf3c6c9788)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x00000000000000171ede64904551eedf3c6c9788)
 */
export const theCompactConfig = {
  address: theCompactAddress,
  abi: theCompactAbi,
} as const

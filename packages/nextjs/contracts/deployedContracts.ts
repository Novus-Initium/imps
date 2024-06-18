/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  11155111: {
    Attesting: {
      address: "0x373aA51226C4167E20ca08Dd390406D74E3303a9",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_owner",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "AccessDenied",
          type: "error",
        },
        {
          inputs: [],
          name: "AlreadyRevoked",
          type: "error",
        },
        {
          inputs: [],
          name: "Irrevocable",
          type: "error",
        },
        {
          inputs: [],
          name: "NotFound",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "attester",
              type: "address",
            },
            {
              indexed: true,
              internalType: "string",
              name: "recipient",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "uid",
              type: "uint256",
            },
          ],
          name: "Attested",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "string",
              name: "recipient",
              type: "string",
            },
            {
              indexed: true,
              internalType: "address",
              name: "attester",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "uid",
              type: "uint256",
            },
          ],
          name: "Revoked",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "recipient",
              type: "string",
            },
            {
              internalType: "bool",
              name: "revocable",
              type: "bool",
            },
            {
              internalType: "string",
              name: "data",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "rating",
              type: "uint256",
            },
          ],
          name: "attest",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "recipient",
              type: "string",
            },
            {
              internalType: "bool",
              name: "revocable",
              type: "bool",
            },
            {
              internalType: "string",
              name: "data",
              type: "string",
            },
            {
              internalType: "address",
              name: "tokenAddress",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenAmount",
              type: "uint256",
            },
            {
              internalType: "address payable",
              name: "destinationAddress",
              type: "address",
            },
          ],
          name: "attestWithToken",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "attester",
              type: "address",
            },
          ],
          name: "attestationsByAttester",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "uid",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "time",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "revocationTime",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "recipient",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "attester",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "revocable",
                  type: "bool",
                },
                {
                  internalType: "string",
                  name: "data",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "rating",
                  type: "uint256",
                },
              ],
              internalType: "struct Attesting.Attestation[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "recipient",
              type: "string",
            },
          ],
          name: "attestationsByRecipient",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "uid",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "time",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "revocationTime",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "recipient",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "attester",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "revocable",
                  type: "bool",
                },
                {
                  internalType: "string",
                  name: "data",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "rating",
                  type: "uint256",
                },
              ],
              internalType: "struct Attesting.Attestation[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "uid",
              type: "uint256",
            },
          ],
          name: "getAttestation",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "uid",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "time",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "revocationTime",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "recipient",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "attester",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "revocable",
                  type: "bool",
                },
                {
                  internalType: "string",
                  name: "data",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "rating",
                  type: "uint256",
                },
              ],
              internalType: "struct Attesting.Attestation",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "uid",
              type: "uint256",
            },
          ],
          name: "revoke",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    ProjectRegistry: {
      address: "0x78Ca926C91c0A747ffA896989D1628ADfE5A7810",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "projectID",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "protocol",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "pointer",
                  type: "string",
                },
              ],
              indexed: false,
              internalType: "struct MetaPtr",
              name: "metaPtr",
              type: "tuple",
            },
          ],
          name: "MetadataUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "projectID",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "OwnerAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "projectID",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "OwnerRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "projectID",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "ProjectCreated",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "projectID",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "addProjectOwner",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "protocol",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "pointer",
                  type: "string",
                },
              ],
              internalType: "struct MetaPtr",
              name: "metadata",
              type: "tuple",
            },
          ],
          name: "createProject",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "projectID",
              type: "uint256",
            },
          ],
          name: "getProjectOwners",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "projectID",
              type: "uint256",
            },
          ],
          name: "projectOwnersCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "projects",
          outputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "protocol",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "pointer",
                  type: "string",
                },
              ],
              internalType: "struct MetaPtr",
              name: "metadata",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "projectsCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "projectsOwners",
          outputs: [
            {
              internalType: "uint256",
              name: "count",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "projectID",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "prevOwner",
              type: "address",
            },
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "removeProjectOwner",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "projectID",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "protocol",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "pointer",
                  type: "string",
                },
              ],
              internalType: "struct MetaPtr",
              name: "metadata",
              type: "tuple",
            },
          ],
          name: "updateProjectMetadata",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
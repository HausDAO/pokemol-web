import { MINION_TYPES } from '../utils/proposalUtils';
import { CONTRACT_MODELS } from '../utils/tokenExplorerApi';

export const INFO_TEXT = {
  SHARES_REQUEST:
    'Shares provide voting power and exposure to assets. Whole numbers only please.',
  LOOT_REQUEST:
    'Loot provides exposure to assets but not voting power. Only whole numbers accepted here, no decimals plz',
  APPLICANT:
    'Address to receive the Shares, Loot, and/or Funding requested in this proposal.',
  TOKEN_TRIBUTE:
    'Only tokens approved by the DAO are allowed here. Members can add more approved tokens with Token proposals',
  PAYMENT_REQUEST: 'Request Funds from the DAO',
  ADDR_KICK: 'Enter the public key of the member you would like to kick.',
  MINION_TYPES: 'Minion funds to be used for this transaction',
  MINION_PAYMENT: `This is the amount of value to be sent from the selected minion's balance`,
  DELEGATE_ADDRESS:
    'Warning: By switching your address to a delegate, you are giving that delegate address the right to act on your behalf.',
};

export const FIELD = {
  TITLE: {
    type: 'input',
    label: 'Title',
    name: 'title',
    htmlFor: 'title',
    placeholder: 'Proposal Title',
    expectType: 'any',
  },
  TOKENS: {
    type: 'multiInput',
    label: 'Tokens',
    name: 'tokens',
    htmlFor: 'tokens',
    placeholder: 'tokenAddress',
    expectType: 'arrayStrings',
  },
  DESCRIPTION: {
    type: 'textarea',
    label: 'Description',
    name: 'description',
    htmlFor: 'description',
    placeholder: 'Your description here.',
    expectType: 'any',
  },
  SHARES_REQUEST: {
    type: 'input',
    label: 'Shares Requested',
    name: 'sharesRequested',
    htmlFor: 'shares',
    placeholder: '0',
    info: INFO_TEXT.SHARES_REQUEST,
    expectType: 'integer',
  },
  LOOT_REQUEST: {
    type: 'input',
    label: 'Loot Requested',
    name: 'lootRequested',
    htmlFor: 'loot',
    placeholder: '0',
    info: INFO_TEXT.LOOT_REQUEST,
    expectType: 'integer',
  },
  LINK: {
    type: 'linkInput',
    label: 'Link',
    name: 'link',
    htmlFor: 'link',
    placeholder: 'daolink.club',
    expectType: 'urlNoHTTP',
  },
  APPLICANT: {
    type: 'applicantInput',
    htmlFor: 'applicant',
    name: 'applicant',
    placeholder: '0x',
    label: 'Applicant',
    info: INFO_TEXT.APPLICANT,
    expectType: 'address',
  },
  TRIBUTE: {
    type: 'tributeInput',
    htmlFor: 'tribute',
    name: 'tributeOffered',
    placeholder: '0',
    label: 'Tribute Offered',
    info: INFO_TEXT.TOKEN_TRIBUTE,
    expectType: 'number',
  },
  PAYMENT_REQUEST: {
    type: 'paymentInput',
    htmlFor: 'paymentRequested',
    name: 'paymentRequested',
    placeholder: '0',
    label: 'Payment Requested',
    info: INFO_TEXT.PAYMENT_REQUEST,
    expectType: 'number',
  },
  ONLY_ERC20: {
    type: 'gatedInput',
    only: CONTRACT_MODELS.ERC20,
    label: 'ERC-20 Address',
    name: 'erc20TokenAddress',
    htmlFor: 'erc20TokenAddress',
    placeholder: '0x',
    expectType: 'address',
  },
  ONLY_ERC721: {
    type: 'gatedInput',
    only: CONTRACT_MODELS.ERC721,
    label: 'ERC-721 Address',
    name: 'erc721TokenAddress',
    htmlFor: 'erc20TokenAddress',
    placeholder: '0x',
    expectType: 'address',
  },
  //  Plain old input until token price API can be built
  MINION_PAYMENT: {
    type: 'minionPayment',
    htmlFor: 'minionPayment',
    name: 'minionPayment',
    selectName: 'minionToken',
    placeholder: '0',
    label: 'Minion Payment',
    info: INFO_TEXT.MINION_PAYMENT,
    expectType: 'number',
  },
  MINION_SELECT: {
    type: 'minionSelect',
    label: 'Select a minion',
    name: 'selectedMinion',
    htmlFor: 'selectedMinion',
    placeholder: 'Choose a DAO minion',
    expectType: 'address',
    minionType: MINION_TYPES.VANILLA,
  },
  ABI_INPUT: {
    type: 'abiInput',
    label: 'Contract Function',
    name: 'abiInput',
    htmlFor: 'abiInput',
    placeholder: '0x',
    expectType: 'string',
  },
  TARGET_CONTRACT: {
    type: 'targetContract',
    label: 'Contract Address',
    name: 'targetContract',
    htmlFor: 'targetContract',
    placeholder: '0x',
    expectType: 'address',
  },
  DELEGATE_ADDRESS: {
    type: 'input',
    htmlFor: 'delegateAddress',
    name: 'delegateAddress',
    placeholder: '0x',
    label: 'Address',
    info: INFO_TEXT.DELEGATE_ADDRESS,
    expectType: 'address',
  },
};

export const FORM_DISPLAY = {
  LOOT_REQUEST: {
    type: 'lootGrabDisplay',
    name: 'lootRequested',
    listenTo: 'tributeOffered',
    label: 'Loot Requested',
    fallback: '0',
    expectType: 'number',
  },
};
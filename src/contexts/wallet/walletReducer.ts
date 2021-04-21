import { ethers } from 'ethers'

import { WalletState, WalletStatus } from './types'

const CONNECT = 'CONNECT'
const DISCONNECT = 'DISCONNECT'
const SET_ACCOUNT = 'SET_ACCOUNT'
const SET_STATUS = 'SET_STATUS'

interface ConnectAction {
  type: typeof CONNECT
  account: string
  provider: ethers.providers.Web3Provider
}

interface DisconnectAction {
  type: typeof DISCONNECT
}

interface SetAccountAction {
  type: typeof SET_ACCOUNT
  account?: string
}

interface SetStatusAction {
  type: typeof SET_STATUS
  status: WalletStatus
}

type WalletAction =
  | ConnectAction
  | DisconnectAction
  | SetAccountAction
  | SetStatusAction

export const connect = (
  account: string,
  provider: ethers.providers.Web3Provider,
): ConnectAction => ({
  type: CONNECT,
  account,
  provider,
})

export const disconnect = (): DisconnectAction => ({
  type: DISCONNECT,
})

export const setAccount = (account?: string): SetAccountAction => ({
  type: SET_ACCOUNT,
  account,
})

export const setStatus = (status: WalletStatus): SetStatusAction => ({
  type: SET_STATUS,
  status,
})

export const initialState: WalletState = {}

const walletReducer = (
  state: WalletState,
  action: WalletAction,
): WalletState => {
  switch (action.type) {
    case CONNECT:
      return {
        ...state,
        account: action.account,
        provider: action.provider,
        status: 'connected',
      }
    case DISCONNECT:
      return {
        ...state,
        account: undefined,
        status: 'disconnected',
      }
    case SET_ACCOUNT:
      return {
        ...state,
        account: action.account,
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      }
    default:
      return state
  }
}

export default walletReducer

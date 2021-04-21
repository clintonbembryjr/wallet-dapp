import { ethers } from 'ethers'

export type WalletStatus =
  | 'connected'
  | 'connecting'
  | 'disconnected'
  | 'not-found'

export interface WalletContextValues {
  account?: string
  onConnect: () => void
  onDisconnect: () => void
  provider?: ethers.providers.Web3Provider
  status?: WalletStatus
}

export interface WalletState {
  account?: string
  provider?: ethers.providers.Web3Provider
  status?: WalletStatus
}
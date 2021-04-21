import React, { useCallback, useEffect, useReducer } from 'react'

import { ethers } from 'ethers'

import WalletContext from './WalletContext'

import walletReducer, {
  connect,
  disconnect,
  initialState,
  setStatus,
} from './walletReducer'

const WalletProvider: React.FC = ({ children }) => {
  const [
    { account, provider, status },
    dispatch,
  ] = useReducer(walletReducer, initialState)

  const ethereum = (window as any).ethereum

  const handleConnect = useCallback(async () => {

  }, [dispatch, ethereum])

  const handleDisconnect = useCallback(() => {

  }, [dispatch])

  return (
    <WalletContext.Provider
      value={{
        account,
        onConnect: handleConnect,
        onDisconnect: handleDisconnect,
        provider,
        status,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export default WalletProvider

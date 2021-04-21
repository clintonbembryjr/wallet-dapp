import { createContext } from 'react'

import { WalletContextValues } from './types'

const WalletContext = createContext<WalletContextValues>({
  onConnect: () => {},
  onDisconnect: () => {},
})

export default WalletContext

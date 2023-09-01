import {optimismGoerli} from '@wagmi/core/chains'
import {jsonRpcProvider} from '@wagmi/core/providers/jsonRpc'
import { ReactNode } from 'react'
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

const { chains, publicClient } = configureChains(
    [optimismGoerli],
    [
        jsonRpcProvider({
          rpc: () => ({
            http: `http://localhost:8545`,
          }),
        }),
      ],
  )

const config = createConfig({
  autoConnect: true,
  connectors: [new InjectedConnector({ chains })],
  publicClient,
})

interface ProvidersProps {
    children: ReactNode
}

export function Providers({children}: ProvidersProps){
    return (
        <WagmiConfig config={config}>
            {children}
        </WagmiConfig>
    )
}
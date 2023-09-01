import { counterABI, counterAddress } from '@generated'
import { useAccount, useConnect, useDisconnect, useContractWrite, useContractRead, useNetwork } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

import { Button } from './tailwind/components/ui/button'

export function App() {
    const { address, isConnected } = useAccount()
    const { connect } = useConnect({
      connector: new InjectedConnector(),
    })
    const { disconnect } = useDisconnect()
    const {chain} = useNetwork()
    
    const {write} = useContractWrite({
      abi: counterABI,
      address: counterAddress[(chain?.id ?? 1) as keyof typeof counterAddress],
      functionName: 'increment',
    })

    const {data} = useContractRead({
      abi: counterABI,
      address: counterAddress[(chain?.id ?? 1) as keyof typeof counterAddress],
      functionName: 'number',
      account: address
    })

    if (isConnected)
      return (
        <div>
          Connected to {address}
          <Button onClick={() => disconnect()}>Disconnect</Button>
          <div> 
            Counter status : {data?.toString()}
          <Button onClick={() => write()}>Increment</Button>
        </div>
        </div>
      )
    return <Button onClick={() => connect()}>Connect Wallet</Button>
}

export default App

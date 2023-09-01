import { defineConfig } from '@wagmi/cli'
import { foundry } from '@wagmi/cli/plugins'

import deployments  from '../contracts/addresses.json'

export default defineConfig({ 
    out: 'generated/generated.ts', 
     
    plugins: [foundry({
        project: '../contracts',
        deployments,
    })] })

import { defineConfig } from '@wagmi/cli'
import { foundry } from '@wagmi/cli/plugins'

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [],
  plugins: [
    foundry({
      project: '.',
      deployments: {
        TheCompact: {
          1: '0x00000000000000171ede64904551eedf3c6c9788',
          10: '0x00000000000000171ede64904551eedf3c6c9788',
          130: '0x00000000000000171ede64904551eedf3c6c9788',
          42161: '0x00000000000000171ede64904551eedf3c6c9788',
        }
      },
      include: ['**/TheCompact.sol/TheCompact.json']
    }),
  ],
})

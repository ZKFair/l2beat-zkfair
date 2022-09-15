import {
  Bridge,
  getTokenBySymbol,
  Layer2,
  Layer2Event,
  TokenInfo,
  tokenList,
} from '@l2beat/config'
import { EthereumAddress, ProjectId, UnixTime } from '@l2beat/types'

export interface Project {
  projectId: ProjectId
  type: 'layer2' | 'bridge'
  escrows: ProjectEscrow[]
  events: Layer2Event[]
}

export interface ProjectEscrow {
  address: EthereumAddress
  sinceTimestamp: UnixTime
  tokens: TokenInfo[]
}

export function layer2ToProject(layer2: Layer2): Project {
  return {
    projectId: layer2.id,
    type: 'layer2',
    escrows: layer2.escrows.map((escrow) => ({
      address: EthereumAddress(escrow.address),
      sinceTimestamp: escrow.sinceTimestamp,
      tokens:
        escrow.tokens === '*' ? tokenList : escrow.tokens.map(getTokenBySymbol),
    })),
    events: layer2.events,
  }
}

export function bridgeToProject(bridge: Bridge): Project {
  return {
    projectId: bridge.id,
    type: 'bridge',
    escrows: bridge.escrows.map((escrow) => ({
      address: EthereumAddress(escrow.address),
      sinceTimestamp: escrow.sinceTimestamp,
      tokens:
        escrow.tokens === '*' ? tokenList : escrow.tokens.map(getTokenBySymbol),
    })),
    events: [],
  }
}
import { reconnect } from '@bitunity/client'
import { useEffect } from 'react'
import type { Config } from 'wagmi'

export const useReconnect = (config: Config) => {
  useEffect(() => {
    reconnect(config)
  }, [config])
}

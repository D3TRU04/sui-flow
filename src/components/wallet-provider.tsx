"use client"

import { WalletKitProvider } from "@mysten/wallet-kit"
import { type ReactNode } from "react"

export function WalletProvider({ children }: { children: ReactNode }) {
  return (
    <WalletKitProvider
      features={["sui:signAndExecuteTransactionBlock"]}
      enableUnsafeBurner
    >
      {children}
    </WalletKitProvider>
  )
} 
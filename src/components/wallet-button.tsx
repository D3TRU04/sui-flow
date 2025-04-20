"use client"

import { useWalletKit } from "@mysten/wallet-kit"
import { Button } from "@/components/ui/button"

export function WalletButton() {
  const { currentWallet, wallets, connect, disconnect } = useWalletKit()

  if (currentWallet) {
    return (
      <Button variant="outline" onClick={() => disconnect()}>
        Disconnect Wallet
      </Button>
    )
  }

  return (
    <Button variant="outline" onClick={() => connect()}>
      Connect Wallet
    </Button>
  )
} 
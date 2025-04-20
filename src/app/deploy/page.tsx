"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { WalletButton } from "@/components/wallet-button"

export default function DeployPage() {
  const [code, setCode] = useState<string>("// Generated Move code will appear here")

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Deploy Contract</h1>
        <WalletButton />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="rounded-lg border p-4 bg-muted">
            <h2 className="text-xl font-semibold mb-4">Generated Move Code</h2>
            <pre className="overflow-auto p-4 bg-background rounded">
              <code>{code}</code>
            </pre>
          </div>
          
          <div className="flex gap-4">
            <Button variant="outline">Compile</Button>
            <Button>Deploy to Devnet</Button>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="rounded-lg border p-4 bg-muted">
            <h2 className="text-xl font-semibold mb-4">Deployment Status</h2>
            <div className="space-y-2">
              <p>Status: Not deployed</p>
              <p>Transaction Hash: -</p>
              <p>Contract Address: -</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
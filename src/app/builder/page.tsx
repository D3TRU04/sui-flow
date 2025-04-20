"use client"

import { useCallback } from "react"
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
} from "react-flow-renderer"
import { Button } from "@/components/ui/button"
import { WalletButton } from "@/components/wallet-button"

const initialNodes: Node[] = []
const initialEdges: Edge[] = []

export default function BuilderPage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  return (
    <div className="h-screen w-full">
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <WalletButton />
        <Button variant="outline">Compile</Button>
        <Button>Deploy</Button>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  )
} 
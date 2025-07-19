import { cn } from "@/lib/utils"
import type React from "react"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"

interface BentoGridDemoProps {
  items?: Array<{
    title: string | React.ReactNode
    description: string | React.ReactNode
    header?: React.ReactNode
    icon?: React.ReactNode
    className?: string
  }>
  className?: string
}

export default function BentoGridDemo({ items = [], className }: BentoGridDemoProps) {
  return (
    <BentoGrid className={cn("max-w-6xl mx-auto", className)}>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={item.className}
        />
      ))}
    </BentoGrid>
  )
}

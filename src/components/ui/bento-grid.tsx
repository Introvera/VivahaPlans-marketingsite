import type React from "react"
import { cn } from "@/lib/utils"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div className={cn("mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3", className)}>
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 hover:shadow-xl",
        className,
      )}
    >
      {header}
      <div className="transition duration-200">
        {icon}
        <div className="mt-4 mb-2 font-serif text-xl font-bold text-gray-900">{title}</div>
        <div className="font-sans text-sm leading-relaxed text-gray-600">{description}</div>
      </div>
    </div>
  )
}

'use client'

import * as TabsPrimitive from '@radix-ui/react-tabs'

import { classed } from '~/utils'

const Tabs = TabsPrimitive.Root

const TabsList = classed(
  TabsPrimitive.List,
  'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
)
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = classed(
  TabsPrimitive.Trigger,
  'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
)
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = classed(
  TabsPrimitive.Content,
  'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
)
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsContent, TabsList, TabsTrigger }

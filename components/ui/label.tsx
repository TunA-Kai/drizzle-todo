'use client'

import * as LabelPrimitive from '@radix-ui/react-label'

import { classed } from '~/utils'

const Label = classed(
  LabelPrimitive.Root,
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
)

Label.displayName = LabelPrimitive.Root.displayName

export { Label }

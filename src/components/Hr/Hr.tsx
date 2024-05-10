import { sizes } from '@/constants/ui'
import { Subset } from '@/types'
import { insertIf } from '@/utils/array.utils'
import React, { ComponentProps } from 'react'

type Props = {
  size?: Subset<keyof typeof sizes, 'medium' | 'large' | 'extra-large'>
} & ComponentProps<'hr'>

export default function Hr({ size, ...props }: Props) {
  const sizeClass = !!size && size in sizes && sizes[size]
  const classes = [
    'govuk-section-break',
    ...insertIf(!!sizeClass, `govuk-section-break--${sizeClass}`),
    'govuk-section-break--visible',
  ].join(' ')
  return <hr className={classes} {...props} />
}

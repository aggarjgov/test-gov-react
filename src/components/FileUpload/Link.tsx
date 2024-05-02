import { isExternalLink } from '@/utils/array.utils'
import React, { ComponentProps } from 'react'

type Props = ComponentProps<'a'> & { href: string }

export default function Link(props: Props) {
  const classes = ['govuk-link'].join('')
  return (
    <a
      className={classes}
      rel={isExternalLink(props.href) ? 'noreferrer noopener' : ''}
      {...props}
    />
  )
}

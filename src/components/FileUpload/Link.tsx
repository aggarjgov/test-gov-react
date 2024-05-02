import { isExternalLink } from '@/utils/array.utils'
import React, { ComponentProps } from 'react'
import { Link as RouterLink } from 'react-router-dom'

type Props = ComponentProps<'a'> & { href: string }

export default function Link(props: Props) {
  const classes = ['govuk-link'].join('')
  const linkProps: ComponentProps<'a'> = {
    className: classes,
    ...props,
  }

  return isExternalLink(props.href) ? (
    <a rel="noreferrer noopener" {...props} />
  ) : (
    <RouterLink {...props} to={props.href} />
  )
}

import React, { type ComponentProps } from 'react'

type Props = {
  title: string
} & ComponentProps<'details'>

export default function Detail({ title, children, ...props }: Props) {
  return (
    <details className="govuk-details" {...props}>
      <summary className="govuk-details__summary">
        <span className="govuk-details__summary-text">{title}</span>
      </summary>
      <div className="govuk-details__text">{children}</div>
    </details>
  )
}

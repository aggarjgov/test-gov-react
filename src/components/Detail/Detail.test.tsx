import { render, screen } from '@testing-library/react'
import Detail from './Detail'

describe('Detail', () => {
  it('renders the title', () => {
    const title = 'Example Title'
    render(<Detail title={title} />)
    const titleElement = screen.getByText(title)
    expect(titleElement).toBeInTheDocument()
  })

  it('renders the children', () => {
    const children = 'Example Children'
    render(<Detail title="Example Title">{children}</Detail>)
    const childrenElement = screen.getByText(children)
    expect(childrenElement).toBeInTheDocument()
  })

  it('applies the "govuk-details" class', () => {
    render(<Detail title="Example Title" />)
    const detailsElement = screen.getByRole('group')
    expect(detailsElement).toHaveClass('govuk-details')
  })

  it('applies the "govuk-details__summary" class to the summary element', () => {
    render(<Detail title="Example Title" />)
    const summaryElement = screen.getByRole('button')
    expect(summaryElement).toHaveClass('govuk-details__summary')
  })

  it('applies the "govuk-details__summary-text" class to the summary text element', () => {
    const title = 'Example Title'
    render(<Detail title={title} />)
    const summaryTextElement = screen.getByText(title)
    expect(summaryTextElement).toHaveClass('govuk-details__summary-text')
  })

  it('applies the "govuk-details__text" class to the text element', () => {
    render(<Detail title="Example Title" />)
    const textElement = screen.getByText('')
    expect(textElement).toHaveClass('govuk-details__text')
  })
})

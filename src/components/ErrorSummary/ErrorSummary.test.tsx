import { render, screen } from '@testing-library/react'
import ErrorSummary from './ErrorSummary'

describe('ErrorSummary', () => {
  const list = [
    { href: '#1', text: 'Error 1' },
    { href: '#2', text: 'Error 2' },
  ]

  it('renders the component with default title', () => {
    render(<ErrorSummary list={list} />)
    const titleElement = screen.getByText('There is a problem')
    expect(titleElement).toBeInTheDocument()
  })

  it('renders the component with custom title', () => {
    render(<ErrorSummary title="Custom Title" list={list} />)
    const titleElement = screen.getByText('Custom Title')
    expect(titleElement).toBeInTheDocument()
  })

  it('renders the list of errors', () => {
    render(<ErrorSummary list={list} />)
    const errorElements = screen.getAllByRole('listitem')
    expect(errorElements).toHaveLength(2)
    expect(errorElements[0]).toHaveTextContent('Error 1')
    expect(errorElements[1]).toHaveTextContent('Error 2')
  })

  it('focuses on the component on first render if there are errors', () => {
    render(<ErrorSummary list={list} />)
    const errorSummaryElement = screen.getByRole('alert')
    expect(errorSummaryElement).toHaveFocus()
  })

  it('does not focus on the component on first render if there are no errors', () => {
    render(<ErrorSummary list={[]} />)
    const errorSummaryElement = screen.getByRole('alert')
    expect(errorSummaryElement).not.toHaveFocus()
  })
})

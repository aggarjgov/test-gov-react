import { render, screen } from '@testing-library/react'
import Link from './Link'

describe('Link', () => {
  it('renders without crashing', () => {
    render(<Link href="https://example.com" />)
    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
  })

  it('renders the correct href', () => {
    const href = 'https://example.com'
    render(<Link href={href} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', href)
  })

  it('adds the "govuk-link" class', () => {
    render(<Link href="https://example.com" />)
    const link = screen.getByRole('link')
    expect(link).toHaveClass('govuk-link')
  })

  it('adds the "noreferrer noopener" rel attribute for external links', () => {
    render(<Link href="https://example.com" />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('rel', 'noreferrer noopener')
  })

  it('does not add the rel attribute for internal links', () => {
    render(<Link href="/internal" />)
    const link = screen.getByRole('link')
    expect(link).not.toHaveAttribute('rel')
  })
})

import { render, screen } from '@testing-library/react'
import Hr from './Hr'

describe('Hr', () => {
  it('renders the component', () => {
    render(<Hr />)
    const hrElement = screen.getByRole('separator')
    expect(hrElement).toBeInTheDocument()
  })

  it('applies the "govuk-section-break" class', () => {
    render(<Hr />)
    const hrElement = screen.getByRole('separator')
    expect(hrElement).toHaveClass('govuk-section-break')
  })

  it('applies the "govuk-section-break--visible" class', () => {
    render(<Hr />)
    const hrElement = screen.getByRole('separator')
    expect(hrElement).toHaveClass('govuk-section-break--visible')
  })

  it('applies the "govuk-section-break--medium" class when size prop is set to "medium"', () => {
    render(<Hr size="medium" />)
    const hrElement = screen.getByRole('separator')
    expect(hrElement).toHaveClass('govuk-section-break--medium')
  })

  it('applies the "govuk-section-break--large" class when size prop is set to "large"', () => {
    render(<Hr size="large" />)
    const hrElement = screen.getByRole('separator')
    expect(hrElement).toHaveClass('govuk-section-break--large')
  })

  it('applies the "govuk-section-break--extra-large" class when size prop is set to "extra-large"', () => {
    render(<Hr size="extra-large" />)
    const hrElement = screen.getByRole('separator')
    expect(hrElement).toHaveClass('govuk-section-break--extra-large')
  })
})

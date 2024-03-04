import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FileUpload from './FileUpload'
import { createRef } from 'react'

describe('FileUpload', () => {
  it('renders without crashing', () => {
    render(<FileUpload />)
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })

  it('renders the label when provided', () => {
    render(<FileUpload label="Test Label" />)
    const label = screen.getByText('Test Label')
    expect(label).toBeInTheDocument()
  })

  it('forwards the ref correctly', () => {
    const ref = createRef()
    render(<FileUpload ref={ref} />)
    expect(ref.current).toBeInTheDocument()
  })

  it('handles file upload', () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' })
    render(<FileUpload />)
    const input = screen.getByRole('textbox')
    userEvent.upload(input, file)
    expect(input.files[0]).toStrictEqual(file)
    expect(input.files.item(0)).toStrictEqual(file)
    expect(input.files).toHaveLength(1)
  })
})

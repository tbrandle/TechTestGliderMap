/* globals jest expect it describe beforeAll */
import { render, fireEvent } from '@testing-library/react'
import api from '../util/api'
import { Question1 } from '../components/Questions'

jest.mock('../util/api')

describe('Question1', () => {
  const mockPost = jest.fn()
  beforeAll(() => {
    api.mockImplementation(() => {
      return {
        post: mockPost
      }
    })
  })

  it('should render', () => {
    const { container } = render(<Question1 />)
    expect(container).toBeInTheDocument()
  })

  it('should throw an error if input is empty', async () => {
    const { getByLabelText, getByText } = render(<Question1 />)
    const titleInput = getByLabelText('Title')
    const bodyInput = getByLabelText('Body')
    const submitBtn = getByText('Submit')

    fireEvent.change(titleInput, { target: { value: 'test' } })
    fireEvent.change(bodyInput, { target: { value: 'test' } })
    expect(titleInput.value).toBe('test')

    fireEvent.click(submitBtn)
    // expect(mockPost).toHaveBeenCalled()
  })
})

import { render } from '@testing-library/react'
import App from './App'

// test('renders learn react link', () => {
//   render(<App />)
//   const linkElement = screen.getByText(/learn react/i)
//   expect(linkElement).toBeInTheDocument()
// })

test('render App', () => {
  render(<App />)
  const container = document.querySelector('.container')
  expect(container).toBeTruthy()
})

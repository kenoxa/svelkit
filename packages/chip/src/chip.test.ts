import '@carv/types'
import { render, screen } from '@testing-library/svelte'
import html from 'svelte-htm'

import Chip from './chip.svelte'

test('renders content', () => {
  render(html`<${Chip}>content<//>`)

  expect(screen.getByText('content')).toBeInTheDocument()
})

test('has chip class', () => {
  render(html`<${Chip}>content<//>`)

  expect(screen.getByText('content')).toHaveClass('chip')
})

test('can have additional classes', () => {
  render(html`<${Chip} class="large">content<//>`)

  expect(screen.getByText('content')).toHaveClass('chip', 'large')
})

test('can have additional attributes', () => {
  render(html`<${Chip} id="x">content<//>`)

  expect(screen.getByText('content')).toHaveAttribute('id', 'x')
})

test('renders as span', () => {
  render(html`<${Chip}>content<//>`)

  expect(screen.getByText('content').tagName).toBe('SPAN')
})

test('can render as div', () => {
  render(html`<${Chip} as="div">content<//>`)

  expect(screen.getByText('content').tagName).toBe('DIV')
})

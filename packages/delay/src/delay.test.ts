import '@carv/types'
import { render, screen } from '@testing-library/svelte'
import html from 'svelte-htm'

import Delay from './delay.svelte'

jest.useFakeTimers()

test('content not visible on initial delay', () => {
  render(html`<${Delay}>content<//>`)

  expect(screen.queryByText('content')).toBeNull()
})

test('content to be visible after initial delay', async () => {
  render(html`<${Delay}>content<//>`)

  jest.runAllTimers()

  const content = await screen.findByText('content')
  expect(content).toBeInTheDocument()
})

test('content not to be visible after initial delay if show is falsy', () => {
  render(html`<${Delay} show="{false}">content<//>`)

  jest.runAllTimers()

  expect(screen.queryByText('content')).toBeNull()
})

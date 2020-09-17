import '@carv/types'
import { render, screen } from '@testing-library/svelte'
import html from 'svelte-htm'

import { baseline } from '..'

test('global reset', () => {
  baseline()

  expect(document.documentElement).toHaveClass('baseline')
})

test('scoped', () => {
  render(html`<div use:baseline=${baseline}>content<//>`)

  expect(screen.getByText('content')).toHaveClass('baseline')
})

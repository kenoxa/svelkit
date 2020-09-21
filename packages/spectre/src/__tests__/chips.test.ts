import '@carv/types'
import { render, screen } from '@testing-library/svelte'
import html from 'svelte-htm'

import { chip } from '..'

test('has chip class', () => {
  render(html`<div use:chip=${chip}>content<//>`)

  expect(screen.getByText('content')).toHaveClass('chip')
})

test('maybe active', () => {
  render(html`<div use:chip=${(node: Element) => chip(node, { active: true })}>content<//>`)

  expect(screen.getByText('content')).toHaveClass('chip', 'active')
})

test('chip.active', () => {
  render(html`<div use:chip.active=${chip.active}>content<//>`)

  expect(screen.getByText('content')).toHaveClass('chip', 'active')
})

test('can have additional classes', () => {
  render(html`<div use:chip=${chip} class="large">content<//>`)

  expect(screen.getByText('content')).toHaveClass('chip', 'large')
})

test.each([
  [undefined, 'chip'],
  [{ active: false }, 'chip'],
  [{ active: true }, 'chip active'],
])('chip(%j) => %s', (options, className) => {
  expect(chip(options)).toBe(className)
})

test.each([['active', 'chip active']])('chip.%s() => %s', (property, className) => {
  const base = chip[property as keyof typeof chip] as () => string

  expect(base()).toBe(className)
})

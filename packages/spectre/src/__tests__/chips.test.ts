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
])('chip.clsx(%j) => %s', (options, className) => {
  expect(chip.clsx(options)).toBe(className)
})

test('chip.class => chip', () => {
  expect(chip.class).toBe('chip')
})

test.each([['active', 'chip active']])('chip.%s.class => %s', (property, className) => {
  const base = chip[property as keyof typeof chip] as { class: string }

  expect(base.class).toBe(className)
})

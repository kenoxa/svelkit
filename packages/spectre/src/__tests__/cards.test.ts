import '@carv/types'
import { render, screen } from '@testing-library/svelte'
import html from 'svelte-htm'

import type { Action } from '..'

import { card } from '..'

test('has card class', () => {
  render(html`<div use:card=${card}>content<//>`)

  expect(screen.getByText('content')).toHaveClass('card')
})

test('may have shadow', () => {
  render(html`<div use:card=${(node: Element) => card(node, { shadow: true })}>content<//>`)

  expect(screen.getByText('content')).toHaveClass('card', 'card-shadow')
})

test('can have additional classes', () => {
  render(html`<div use:card=${card} class="large">content<//>`)

  expect(screen.getByText('content')).toHaveClass('card', 'large')
})

test.each([
  [undefined, 'card'],
  [{ shadow: false }, 'card'],
  [{ shadow: true }, 'card card-shadow'],
])('card.clsx(%j) => %s', (options, className) => {
  expect(card.clsx(options)).toBe(className)
})

test('card.class => card', () => {
  expect(card.class).toBe('card')
})

test.each([
  ['shadow', 'card card-shadow'],
  ['image', 'card-image'],
  ['header', 'card-header'],
  ['body', 'card-body'],
  ['footer', 'card-footer'],
])('card.%s', (property, className) => {
  const action = (card[property as keyof typeof card] as unknown) as Action<boolean>

  render(html`<div use:action=${action}>content<//>`)
  expect(screen.getByText('content')).toHaveClass(...className.split(/\s+/g))

  expect(action.clsx()).toBe(className)
  expect(action.clsx(true)).toBe(className)
  expect(action.clsx(false)).toBe('')
  expect(action.class).toBe(className)
})

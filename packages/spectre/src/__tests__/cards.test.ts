import '@carv/types'
import { render, screen } from '@testing-library/svelte'
import html from 'svelte-htm'

import type { Action, CardParameter } from '..'

import { card } from '..'

test('card action', () => {
  render(html`<div>content<//>`)

  const node = screen.getByText('content')

  const action = card(node)

  expect(node).toHaveClass('card')
  expect(node).not.toHaveClass('card-shadow')

  action.update('shadow')
  expect(node).toHaveClass('card', 'card-shadow')

  action.update({ shadow: false })
  expect(node).toHaveClass('card')
  expect(node).not.toHaveClass('card-shadow')

  action.update({ shadow: true })
  expect(node).toHaveClass('card', 'card-shadow')
})

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
  ['shadow', 'card card-shadow'],
  ['image', 'card-image'],
  ['header', 'card-header'],
  ['body', 'card-body'],
  ['footer', 'card-footer'],
])('card(%j) => %s', (options, className) => {
  expect(card(options as CardParameter)).toBe(className)
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

  expect(action()).toBe(className)
  expect(action(true)).toBe(className)
  expect(action(false)).toBe('')
})

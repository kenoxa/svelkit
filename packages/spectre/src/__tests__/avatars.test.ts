import '@carv/types'
import { render, screen } from '@testing-library/svelte'
import html from 'svelte-htm'

import type { AvatarParameter } from '..'
import { avatar } from '..'

test('avatar action', () => {
  render(html`<div>content<//>`)

  const node = screen.getByText('content')

  const action = avatar(node)

  expect(node).toHaveClass('avatar')
  expect(node).not.toHaveAttribute('data-initial')

  action.update({ initial: 'XY' })
  expect(node).toHaveAttribute('data-initial', 'XY')

  action.update('xl')
  expect(node).toHaveClass('avatar', 'avatar-xl')
  expect(node).not.toHaveAttribute('data-initial')

  action.update({ size: 'sm', initial: 'AB' })
  expect(node).toHaveClass('avatar', 'avatar-sm')
  expect(node).toHaveAttribute('data-initial', 'AB')
})

test.each([
  [undefined, 'avatar'],
  ['xl', 'avatar avatar-xl'],
  [{ size: 'xl' }, 'avatar avatar-xl'],
  ['lg', 'avatar avatar-lg'],
  [{ size: 'lg' }, 'avatar avatar-lg'],
  ['sm', 'avatar avatar-sm'],
  [{ size: 'sm' }, 'avatar avatar-sm'],
  ['xs', 'avatar avatar-xs'],
  [{ size: 'xs' }, 'avatar avatar-xs'],
  ['presence', 'avatar-presence'],
  ['presence online', 'avatar-presence online'],
])('avatar(%j) => %s', (options, className) => {
  expect(avatar(options as AvatarParameter)).toBe(className)
})

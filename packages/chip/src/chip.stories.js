import html from 'svelte-htm'

import Chip from './chip.svelte'

export default {
  title: 'Chip',
  component: Chip,
  argTypes: {
    active: {
      description: 'Toggle the active state',
      defaultValue: 'false',
      control: { type: 'boolean' },
    },
    as: {
      description: 'HTML tag name to render',
      defaultValue: 'span',
      control: { type: 'inline-radio', options: ['span', 'div'] },
    },
  },
  args: {
    active: false,
    as: 'span',
  },
  parameters: { layout: 'centered' },
}

export const withText = (args) => ({
  Component: html`<${Chip} ...${args}>some text<//>`,
})

export const withEmoji = (args) => ({
  Component: html`<${Chip} ...${args}>😀 😎 👍 💯<//>`,
})

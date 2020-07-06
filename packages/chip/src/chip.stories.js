import html from 'svelte-htm'
import { withKnobs, boolean } from "@storybook/addon-knobs";
import centered from '@storybook/addon-centered/svelte';

import Chip from './chip.svelte';

export default {
  title: 'Chip',
  component: Chip,
  decorators: [withKnobs, centered]
}

export const withText = () => ({
  Component: html`<${Chip} active=${boolean("active", false)}>some text<//>`
});

withText.story = {
  parameters: {
    notes: 'A small component',
  },
};

export const withEmoji = () => ({
  Component: html`<${Chip} active=${boolean("active", false)}>😀 😎 👍 💯<//>`
});

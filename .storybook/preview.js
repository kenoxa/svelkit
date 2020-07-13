import { addParameters } from '@storybook/svelte'

addParameters({
  a11y: {
    // optional selector which element to inspect
    element: '#root',
    // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    // config: {},
    // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
    // options: {},
  }
})

export const controls = { expanded: true }

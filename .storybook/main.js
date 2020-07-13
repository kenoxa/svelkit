module.exports = {
  stories: ['../packages/**/src/**/*.stories.@(ts|js|mdx)'],

  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-viewport/register',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y/register',
    '@storybook/addon-links/register',
  ],

  webpackFinal: (config) => {
    // Add svelte preprocess config
    for (const rule of config.module.rules) {
      if (rule.loader === require.resolve('svelte-loader')) {
        const { compilerOptions, ...svelteConfig } = require('../svelte.config')
        Object.assign(rule.options, svelteConfig, compilerOptions, { dev: false })
      }
    }

    return config
  },
}

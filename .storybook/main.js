module.exports = {
  stories: ['../packages/**/src/**/*.stories.(js|mdx)'],

  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-notes/register',
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

    // Enable typescript support
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
      ],
    })
    config.resolve.extensions.push('.ts', '.tsx')

    return config
  },
}

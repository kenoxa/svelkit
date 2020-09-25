const target = process.env.npm_lifecycle_event === 'build' ? 'import' : 'dev'

module.exports = {
  // If you will serve docs in subdirictory use '/subdir/'
  basepath: '/',

  // Theme
  theme: 'default',

  title: {
    // Constant part of page title
    main: 'Svelte Thing Documentation',

    // Use first header's content as a part of page's title
    // it looks for `# Header` and `## Header` on the current page
    header: true,
  },

  // URL to your favicon
  favicon: 'static/favicon.png',

  pathes: {
    // Directory for files, generated in development mode
    dev: 'build',

    // Directory for builted documentaton
    build: 'dist',
  },

  aliases: {
    '@svelkit/docs': require.resolve(`./src/index.js`),
    '@svelkit/delay': require.resolve(`@svelkit/delay/dist/browser/${target}/delay.js`),
    '@svelkit/graphql': require.resolve(`@svelkit/graphql/dist/browser/${target}/graphql.js`),
    '@svelkit/hooks': require.resolve(`@svelkit/hooks/dist/browser/${target}/hooks.js`),
    '@svelkit/spectre': require.resolve(`@svelkit/spectre/dist/browser/${target}/spectre.js`),
  },

  preprocess: require('./svelte.config').preprocess,
}

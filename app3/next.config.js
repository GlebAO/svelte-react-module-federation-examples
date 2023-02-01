/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  webpack: (config, options) => {
    const { isServer } = options;

    Object.assign(config.experiments, { topLevelAwait: true }); // enable await in import

    config.plugins.push(
      new NextFederationPlugin({
        name: 'app3',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          app2: `app2@http://localhost:3002/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          app4: `app4@http://localhost:3004/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`
        },
        exposes: {},
        shared: {},
        extraOptions: {
          exposePages: false, // `false` by default
          enableImageLoaderFix: true, // `false` by default
          enableUrlLoaderFix: true, // `false` by default
          automaticAsyncBoundary: false, // `false` by default
          skipSharingNextInternals: false // `false` by default
        },
      }),
    );

    return config
  }
}

module.exports = nextConfig

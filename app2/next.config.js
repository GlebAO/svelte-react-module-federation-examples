/** @type {import('next').NextConfig} */

const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  webpack: (config, options) => {
    const { isServer } = options;

    Object.assign(config.experiments, { topLevelAwait: true });
    // config.infrastructureLogging = { debug: /PackFileCache/ }
    config.plugins.push(
      new NextFederationPlugin({
        name: 'app2',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {},
        exposes: {
          "./Header": "./components/Header",
        },
        shared: {},
        extraOptions: {
          exposePages: true, // `false` by default
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

/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  webpack: (config, options) => {
    const { isServer } = options;

    Object.assign(config.experiments, { topLevelAwait: true });

    config.plugins.push(
      new NextFederationPlugin({
        name: 'app2',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {},
        exposes: {
          "./Header": "./components/Header",
        },
        shared: {},
      }),
    );

    return config
  }
}

module.exports = nextConfig

# Example of implementing Webpack module federation | Next.js | SSR
---
## About
This repo contains two apps built with **Next.js 12.3.4** and **React 17.0.2**.

With help of [Webpack 5 Module Federation](https://www.npmjs.com/package/module-federation-plugin) plugin which used in package [Module Federation For Next.js](https://www.npmjs.com/package/@module-federation/nextjs-mf) **App2** exposes component Header and all pages. **App3** takes App 2's remote container and we can import shared modules from App 2.

In App 3 homepage you can see example of importing **Header** component from App 2. App 3 has route /indexOfApp2 and file pages/indexOfApp2.tsx in which we import the whole page of App 2.

## Getting Started
- Install dependencies and run the App 2
```
cd app2
yarn 
yarn dev
```
- Install dependencies and run the App 3
```
cd ..
cd app3
yarn 
yarn dev
```
- Open App 3 [http://localhost:3003/](http://localhost:3003/)
- App 2 [http://localhost:3002/](http://localhost:3002/)
- RemoteEntry of App 2 [http://localhost:3002/_next/static/chunks/remoteEntry.js](http://localhost:3002/_next/static/chunks/remoteEntry.js) we can see what exposes App 2 in moduleMap
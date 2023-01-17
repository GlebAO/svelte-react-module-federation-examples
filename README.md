# Examples of implementing microfrontends with module federation
---
1. app1 - Svelte 
2. app2, app3 - Next.js
3. app4 - React
---
## 1. Importing components from React + Webpack to Svelte + Vite App
App1 is host app. It takes remote container from app4. You can see configuration in `app1/vite.config.js`
App4 is remote app for App1. App4 exposes Badge component. Configuration of Webpack Module Federation - `app4/webpack.config.js` 

In `app4` (React container app which exposes Badge)
For Svelte we need expose component inserted in ReactDom.
This logic in `app4/src/components/WrapperForSvelte.tsx`.
This function takes React component as a prop and returns another function which we can use in Svelte App.
Inner function creates React Virtual Dom in Svelte's Html element (we pass it as a prop - targetDiv) and
returns render and destroy methods. With help of this methods we can render and rerender component with props or destroy
it to avoid memory leaks when destroyed Svelte's parent component

In `app1` (Svelte host app)
We import our Badge component in `app4/src/App.svelte`.
We write wrapper `app4/src/lib/WrapperReactSvelte.svelte` which mounts remote module to DOM and 
envoke render and destroy methods in Svelte's lifecycle hooks. This makes our remote component reactive.

### Getting Started
- Install dependencies and run the App 1
```
cd app1
yarn 
yarn dev
```
- Install dependencies and run the App 4
```
cd ..
cd app4
yarn 
yarn start
```
- Open App 1 [http://localhost:3001/](http://localhost:3001/)
You can see "Badge 12" from App4 on the page. Click on it and counter will encrease

---
## 2. Importing Next.js app to another Next.js app with @next-mf plugin
This repo contains two apps built with **Next.js 12.3.4** and **React 17.0.2**. (You can upgrade to latest if you want)

With help of [Webpack 5 Module Federation](https://www.npmjs.com/package/module-federation-plugin) plugin which used in package [Module Federation For Next.js](https://www.npmjs.com/package/@module-federation/nextjs-mf) **App2** exposes component Header and all pages. **App3** takes App 2's remote container and we can import shared modules from App 2.

In App 3 homepage you can see example of importing **Header** component from App 2. App 3 has route /indexOfApp2 and file pages/indexOfApp2.tsx in which we import the whole page of App 2.

### Getting Started
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

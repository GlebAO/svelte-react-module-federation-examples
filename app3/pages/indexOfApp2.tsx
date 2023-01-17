import { NextPage, NextPageContext } from 'next';
import dynamic from 'next/dynamic';
// const InfoPage = (await import('app2/pages/index')).default;

const InfoPage = dynamic(
  () =>
    // @TODO use @module-federation/typescript
    import('app2/pages/index'),
  { ssr: true },
) as NextPage;

// InfoPage.getInitialProps = async (ctx: NextPageContext) => {
//   const getInitialProps = (await InfoPage)?.getInitialProps;
//   console.log('getInitialProps', getInitialProps)
//   if (getInitialProps) {
//     return getInitialProps(ctx);
//   }
//   return {};
// };

export default InfoPage;

import dynamic from 'next/dynamic';
// const InfoPage = (await import('app2/pages/index')).default;

const InfoPage = dynamic(() => import('app2/pages/index'), {
  ssr: true,
});

const Info = InfoPage;
Info.getInitialProps = InfoPage.getInitialProps;
export default Info;

const InfoPage = (await import('app2/pages/index')).default;

const Info = InfoPage;
Info.getInitialProps = InfoPage.getInitialProps;
export default Info;

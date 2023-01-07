import Head from 'next/head';
import { Header } from '../components/Header';
import Link from 'next/link';
import { NextPage } from 'next/types';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>App2</title>
        <meta name='description' content='App2' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main>
        <Header />
        <div>App 2 home page</div>
        <hr />
        <Link href='/info'>Info</Link>
      </main>
    </>
  );
};

Home.getInitialProps = async (ctx) => {
  return { version: '1.0.1' };
};

export default Home;

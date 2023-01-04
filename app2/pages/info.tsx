import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Info page of App2</title>
        <meta name='description' content='Info page of App2' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main>
        <Header />
        <h1>Info page (App2)</h1>
      </main>
    </>
  );
}

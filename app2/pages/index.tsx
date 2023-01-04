import Head from 'next/head';
import Header from '../components/Header';
import Link from 'next/link';

export default function Home() {
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
        <hr/>
        <Link href='/info'>Info</Link>
      </main>
    </>
  );
}

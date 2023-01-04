import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// const Header = (await import('app2/Header')).default;

const Header = dynamic(() => import('app2/Header'), {
  ssr: true,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>App3</title>
        <meta name='description' content='App3' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main>
        <h1>App 3 home page</h1>
        <hr />
        <h3>Component imported from App2</h3>
        <Header />
        <hr />
        <h3>Index page imported from App2</h3>
        <Link href='/indexOfApp2'>App 2 homepage</Link>
        <hr />
      </main>
    </>
  );
}

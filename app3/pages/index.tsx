import Head from 'next/head';
const Header = (await import('app2/Header')).default;

export default function Home() {
  return (
    <>
      <Head>
        <title>App3</title>
        <meta name='description' content='App3' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main>
        <Header />
        <div>App 3 home page</div>
      </main>
    </>
  );
}

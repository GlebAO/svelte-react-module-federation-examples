import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import {
  revalidate,
  FlushedChunks,
  flushChunks,
} from '@module-federation/nextjs-mf/utils';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // @TODO add revelidation
    const chunks = await flushChunks();
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, chunks };
  }

  render() {
    return (
      <Html>
        <Head>
          <FlushedChunks chunks={this.props.chunks} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

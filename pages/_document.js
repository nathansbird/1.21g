import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {

  render() {
    return (
      <html lang="en">
        <Head>        
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          
          {/* HTML Meta Tags */}
          <title>1.21 Gigawatts Fund</title>
          <meta name="title" content="1.21 Gigawatts Fund"/>
          <meta name="description" content="️121G is run by Ryan Carson, the Chief Operating Officer of PROOF, an exclusive private club for world-class NFT Artists and Collectors."/>

          {/* Search Engine Tags */}
          <meta itemProp="name" content="1.21 Gigawatts Fund"/>
          <meta itemProp="description" content="121G is run by Ryan Carson, the Chief Operating Officer of PROOF, an exclusive private club for world-class NFT Artists and Collectors."/>
          <meta itemProp="image" content="https://imagedelivery.net/vKryk_NnPuormRb6KZS63A/a524c3e7-1576-4a55-e0dd-2ced50b01300/public"/>

          {/* Facebook Meta Tags */}
          <meta property="og:url" content="https://1-21g.vercel.app/"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="1.21 Gigawatts Fund"/>
          <meta property="og:description" content="121G is run by Ryan Carson, the Chief Operating Officer of PROOF, an exclusive private club for world-class NFT Artists and Collectors."/>
          <meta property="og:image" content="https://imagedelivery.net/vKryk_NnPuormRb6KZS63A/a524c3e7-1576-4a55-e0dd-2ced50b01300/public"/>

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:title" content="1.21 Gigawatts Fund"/>
          <meta name="twitter:description" content="121G is run by Ryan Carson, the Chief Operating Officer of PROOF, an exclusive private club for world-class NFT Artists and Collectors."/>
          <meta name="twitter:image" content="https://imagedelivery.net/vKryk_NnPuormRb6KZS63A/a524c3e7-1576-4a55-e0dd-2ced50b01300/public"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
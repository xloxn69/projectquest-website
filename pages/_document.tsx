import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <script 
          type="module" 
          src="https://unpkg.com/@splinetool/viewer@1.9.37/build/spline-viewer.js"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap" 
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 
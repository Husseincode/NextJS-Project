// pages/_app.tsx
import { AppProps } from 'next/app';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css';
import '../src/fontawesome'; // Import the configuration file
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's already added

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
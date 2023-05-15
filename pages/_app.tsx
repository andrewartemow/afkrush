import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';

import '/styles/globals.css';
import Layout from '../components/Layout';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={`${poppins.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
};

export default App;

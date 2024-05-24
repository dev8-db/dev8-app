import "@/styles/globals.css";
import Head from "next/head";
import { ChakraProvider } from '@chakra-ui/react';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Develop8 Studio</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

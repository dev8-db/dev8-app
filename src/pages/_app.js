import "@/styles/globals.css";
import Head from "next/head";
import { ChakraProvider } from '@chakra-ui/react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider className="min-h-screen grid grid-rows-auto grid-cols-1">
      <Head>
        <title>Develop8 Studio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/desktop-fav.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://dev8.me/cards.png" />
        <meta name="twitter:title" content="Develop8 Studio" />
        <meta name="twitter:description" content="About me" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="pt-[50px] md:pt-[50px] mb-5" />
        <div className="flex-grow">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </ChakraProvider>
  )
}

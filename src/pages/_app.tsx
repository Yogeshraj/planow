import Navbar from "@/components/navbar/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Noto_Sans } from "next/font/google";
import Head from "next/head";
import Seo from "./Seo";
import useGetSessionData from "@/hooks/useGetSessionData";
import Script from "next/script";
import { useRouter } from 'next/router'
import { useEffect } from "react";

const notoSans = Noto_Sans({
  weight: ["100", "300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID!

export default function App({ Component, pageProps }: AppProps) {
  const session = useGetSessionData();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.gtag('config', GA_ID, {
        page_path: url,
      })
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <title>
          Planow – Eisenhower Matrix To-Do App for Smart Task Prioritization
        </title>
        <Seo />
      </Head>

      {/* google analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />

      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <main className={notoSans.className}>
        <Navbar userData={session} />
        <Component {...pageProps} />
      </main>
    </>
  );
}

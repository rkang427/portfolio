import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import Header from '../components/layout/header/Header';
import Footer from '../components/layout/Footer';
//import Head from 'next/head';

import Theme from '../components/layout/Theme';

import '../styles/globals.css';

const quicksand = Quicksand({
  variable: '--quicksand',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'RK Portfolio',
  description: 'My rendition of a Dribbble inspired UX Design!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      {/*<Head>*/}
      {/*  <link rel="icon" type="image/svg+xml" href="/home.svg" /> */}
      {/*</Head>*/}
      <body
        className={`${quicksand.variable} antialiased flex flex-col min-h-screen h-full`}
      >
        <Theme>
          <Header />
          <hr className=" mx-auto w-[95%] border-t lightGray" />
          <main className="flex-grow container mx-auto px-4 ">{children}</main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}

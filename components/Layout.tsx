import React from 'react';
import { ReactNode } from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Astha Chauhan - Portfolio</title>
        <meta name="description" content="Full Stack Developer & Cloud Engineer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* Subtle background pattern */}
        <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]" />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 
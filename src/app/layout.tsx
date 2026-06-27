import type { Metadata } from 'next';
import { Outfit, Orbitron, Bebas_Neue } from 'next/font/google';
import './globals.css';
import LenisProvider from '@/components/providers/LenisProvider';
import CursorFollower from '@/components/ui/CursorFollower';
import Navbar from '@/components/Navbar';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Lakshay Singhal | CS Engineer & UI/UX Intern',
  description:
    'Portfolio of Lakshay Singhal, a Computer Science undergraduate specializing in full-stack MERN development, web scraping automation, and UI/UX design.',
  keywords: [
    'Lakshay Singhal',
    'Computer Science Engineer',
    'MERN Stack Developer',
    'UI/UX Intern Xebia',
    'Web Scraping Python',
    'ReactJS Developer',
  ],
  authors: [{ name: 'Lakshay Singhal' }],
  openGraph: {
    title: 'Lakshay Singhal | CS Engineer',
    description: 'Full-stack MERN development, web scraping automation, and UI/UX designs.',
    type: 'website',
    url: 'https://github.com/iLakshaySinghal',
    siteName: 'Lakshay Singhal Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lakshay Singhal | CS Engineer',
    description: 'Full-stack MERN development, web scraping automation, and UI/UX designs.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${orbitron.variable} ${bebasNeue.variable} antialiased bg-primary-bg text-white`}
      >
        <CursorFollower />
        <Navbar />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter, Roboto_Mono as RobotoMono } from 'next/font/google';
import './global.css';

/*
 * Load the fonts using next/font/google. For details, see
 * https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#with-tailwind-css
 */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
const robotoMono = RobotoMono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: 'Drizzle Todo',
  description: 'Drizzle Todo',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      className={`${inter.variable} ${robotoMono.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}

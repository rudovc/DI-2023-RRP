import './globals.css';
import './reset.css';

import { Inter } from 'next/font/google';

import styles from './layout.module.css';
import Button from '@/components/Button/Button';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'React Rendering Patterns',
  description: 'React Rendering Patterns by Profico for DUMP Internship',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('AAAAAAAAAAAAAAAAA');
  console.info(inter);

  return (
    <html lang="en" className={inter.className}>
      <body>
        <section>
          <nav>
            <div className={styles.navigation}>
              <Link href="/client">
                <Button component="div">Client-side rendering</Button>
              </Link>
              <Link href="/server">
                <Button component="div">Server-side rendering</Button>
              </Link>
              <Link href="/static">
                <Button component="div">Static site generation</Button>
              </Link>
            </div>
          </nav>
        </section>
        <section>{children}</section>
      </body>
    </html>
  );
}

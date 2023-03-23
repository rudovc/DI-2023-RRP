'use client';

import './globals.css';
import './reset.css';

import { Inter } from 'next/font/google';

import styles from './layout.module.css';
import Button from '@/shared/components/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  const path = usePathname();

  return (
    <html lang="en" className={inter.className}>
      <body>
        <nav>
          <div className={styles.navigation}>
            <Link href="/client">
              <Button component="div" disabled={path.endsWith('client')}>
                Client-side rendering
              </Button>
            </Link>
            <Link href="/server">
              <Button component="div" disabled={path.endsWith('server')}>
                Server-side rendering
              </Button>
            </Link>
            <Link href="/static">
              <Button component="div" disabled={path.endsWith('static')}>
                Static site generation
              </Button>
            </Link>
          </div>
        </nav>
        <div>
          <Suspense
            fallback={<div className={inter.className}>Loading...</div>}
          >
            {children}
          </Suspense>
        </div>
      </body>
    </html>
  );
}

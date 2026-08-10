import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://next-mdx-blog.vercel.app'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Zarak Khan',
    template: '%s | Zarak Khan'
  },
  description:
    'Computer Science student at York University building software and gaining industry experience at Bruce Power.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>
        <header
          className="site-header"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            padding: '1.25rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'rgba(0, 0, 0, 0.35)',
            backdropFilter: 'blur(12px)',
            color: 'white'
          }}
        >
          <a
            href="/"
            style={{
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            Zarak Khan
          </a>

          <nav className="site-nav" style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#experience" style={{ color: 'white' }}>
              Experience
            </a>
            <a href="#projects" style={{ color: 'white' }}>
              Projects
            </a>
            <a href="#skills" style={{ color: 'white' }}>
              Skills
            </a>
            <a href="#education" style={{ color: 'white' }}>
              Education
            </a>
            <a href="#contact" style={{ color: 'white' }}>
              Contact
            </a>
          </nav>
        </header>

        {children}
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer
      style={{
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid #e5e7eb',
        color: '#6b7280',
        fontSize: '0.9rem'
      }}
    >
      © 2026 Zarak Khan · Computer Science @ York University
    </footer>
  );
}
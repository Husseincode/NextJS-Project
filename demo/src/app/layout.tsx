/* eslint-disable @next/next/no-sync-scripts */

import { ClerkProvider, SignInButton, SignUp, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Head from 'next/head';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className='bg-dark text-white'>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
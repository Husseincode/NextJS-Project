
import { ClerkProvider, SignInButton, SignUp, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className='bg-dark'>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
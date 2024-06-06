
import { ClerkProvider, SignInButton, SignUp, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
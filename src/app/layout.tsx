import type { Metadata } from "next";
import { ReactNode } from 'react'
import ThemeRegistry from './ThemeRegistry'

export const metadata: Metadata = {
  title: "LinkedIn",
   icons: {
    icon: "/favicon.png",
  },
  description: "MUI LinkedIn Style Feed",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
      <html lang="en">
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}

import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kebabsallad",
  description: "When the tech won't work: Think about kebab sallad!",
  openGraph: {
    title: "KebabSallad.se!",
    description: "When the tech won't work: Think about kebab sallad!",
    url: "https://kebabsallad.se",
    siteName: "KebabSallad",
    images: [
      {
        url: "https://kebabsallad.se/kebabsallad.png",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KebabSallad.se, The best website EVER!",
    description: "When the tech won't work: Think about kebab sallad!",
    images: ["https://kebabsallad.se/kebabsallad.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

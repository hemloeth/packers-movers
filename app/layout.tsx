import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Karni Movers and Packers - Professional Relocation Services",
  description:
    "Trusted packers and movers with 15+ years experience. Professional household shifting, office relocation, car transportation services across India.",
  keywords:
    "packers and movers, relocation services, household shifting, office relocation, car transportation, professional movers, packing services, moving company, Karni movers",
  authors: [{ name: "Karni Movers and Packers" }],
  creator: "Karni Movers and Packers",
  publisher: "Karni Movers and Packers",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://karnimoverspacker.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Karni Movers and Packers - Professional Relocation Services",
    description:
      "Trusted packers and movers with 15+ years experience. Professional household shifting, office relocation, car transportation services across India.",
    url: "https://karnimoverspacker.com",
    siteName: "Karni Movers and Packers",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Karni Movers and Packers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karni Movers and Packers - Professional Relocation Services",
    description:
      "Trusted packers and movers with 15+ years experience. Professional household shifting, office relocation, car transportation services across India.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <meta name="theme-color" content="#dc2626" />
        <meta name="msapplication-TileColor" content="#dc2626" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

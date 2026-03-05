import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local"
import { Outfit, Ovo } from "next/font/google"

export const rondbox = localFont({
  src: '../assets/fonts/RondBox-Regular.woff2',
  variable: '--font-rondbox',
  display: 'swap'
})

export const ovo = Ovo({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-ovo',
  display: 'swap'
})

export const outfit = Outfit({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Teodulo Soriano",
  description: "Teodulo Soriano Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rondbox.variable} ${ovo.variable} ${outfit.variable} antialiased`} >
        {children}
      </body>
    </html>
  );
}

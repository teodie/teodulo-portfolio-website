import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local"
import { Outfit, Ovo, Inter } from "next/font/google"
import MenuProvider from "@/utils/ThemeContext";
import NavBAr from "@/components/NavBar";
import Footer from "@/components/Footer";

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

export const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-inter',
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

  metadataBase: new URL(
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://teodulo.website'
  ),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${rondbox.variable} ${ovo.variable} ${outfit.variable} ${inter.variable} dark:bg-foreground dark:text-background antialiased  h-dvh `} >
        <MenuProvider>
          <NavBAr />
          {children}
          <Footer />
        </MenuProvider>
      </body>
    </html>
  );
}

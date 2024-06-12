import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Locations",
  description: "Find movie locations around the world",
  icons: {
    icon: '/clapper.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><link rel="shortcut icon" href="/clapper.png" /></head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

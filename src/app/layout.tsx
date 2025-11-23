import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jency Lab - Handcrafted Natural Care",
  description: "Discover our collection of handmade, organic soaps crafted with love and natural ingredients",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

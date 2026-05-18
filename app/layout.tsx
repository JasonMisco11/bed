import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bedoff Mensah Bonsu",
  description: "FCIMG|FNIMN|FCILG|FCIET| FIoD, MPhil| PGDip| CM| ProM",
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/dshe5kflb/image/upload/v1757589945/368A9454-scaled-e1757589945396_c2l30e.jpg",
        sizes: "(max-width: 768px) 100vw, 33vw",
        type: "image/jpeg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

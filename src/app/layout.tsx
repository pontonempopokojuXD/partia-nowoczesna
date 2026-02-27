import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Nowoczesna | Dołącz do ruchu zmian",
  description:
    "Oficjalna strona partii Nowoczesna. Dołącz do nas, poznaj program, śledź aktualności i wydarzenia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}

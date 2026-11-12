import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Al Amin — Student Portfolio",
  description:
    "Curious by nature. Learning by choice. The personal portfolio of Al Amin, a science student from Bangladesh exploring ideas, technology, and everything in between.",
  keywords: ["Al Amin", "student portfolio", "science student", "Bangladesh"],
  authors: [{ name: "Al Amin" }],
  creator: "Al Amin",
  openGraph: {
    title: "Al Amin — Student Portfolio",
    description: "Curious by nature. Learning by choice.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Al Amin — Student Portfolio",
    description: "Curious by nature. Learning by choice.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B0D12",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${instrumentSerif.variable}`}>
      <body className="bg-base font-sans text-primary antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-surface focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-primary"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

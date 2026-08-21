import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "HALE — Work to Evening v0.3",
  description: "HALE Prototyp v0.3: optionaler State Check-in, Momentaufnahme und immersiver Übergang vom Arbeitstag in den Abend.",
};

export const viewport: Viewport = {
  themeColor: "#111310",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

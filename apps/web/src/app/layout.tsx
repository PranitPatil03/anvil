import { AppProviders } from "@/app/providers/app-providers";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { PropsWithChildren } from "react";
import "@/styles/globals.css";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "anvil",
  description: "AI-native construction operations workspace",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { inter } from "@/lib/fonts";

import { starterConfig } from "@/starter.config";

export const metadata: Metadata = {
  title: starterConfig.name,
  description: starterConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

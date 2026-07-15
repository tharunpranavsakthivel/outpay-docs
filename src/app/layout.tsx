import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Outpay Documentation",
    template: "%s · Outpay",
  },
  description:
    "Technical documentation for Outpay v0.1 Beta: non-custodial USDC checkout on Base.",
  keywords: ["Outpay", "USDC", "Base", "payments", "checkout", "webhooks"],
  openGraph: {
    title: "Outpay Documentation",
    description:
      "Build with Outpay's hosted checkout and merchant API for USDC on Base.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

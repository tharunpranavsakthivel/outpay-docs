import { RootProvider } from "fumadocs-ui/provider/next";
import "./globals.css";
import { serializeJsonLd, siteMetadata, siteStructuredData } from "@/lib/seo";

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is serialized from static application data.
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(siteStructuredData),
          }}
        />
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

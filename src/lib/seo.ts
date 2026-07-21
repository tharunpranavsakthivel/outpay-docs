import type { Metadata } from "next";

export const siteName = "Outpay Docs";
export const defaultSiteUrl = "https://docs.outpay.tech";
export const siteDescription =
  "Technical documentation for accepting USDC payments on Base with Outpay's hosted checkout, payment API, and signed webhooks.";
export const defaultKeywords = [
  "Outpay",
  "crypto payments",
  "USDC payments",
  "Base payments",
  "payment API",
  "checkout integration",
  "merchant documentation",
  "payment webhooks",
];

function resolveSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) return new URL(defaultSiteUrl);

  try {
    const url = new URL(configuredUrl);
    url.pathname = url.pathname.replace(/\/+$/, "");
    return url;
  } catch {
    return new URL(defaultSiteUrl);
  }
}

export const siteUrl = resolveSiteUrl();

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function pageTitle(title: string) {
  return `${title} | ${siteName}`;
}

const keywordMap: Record<string, string[]> = {
  "/docs": ["USDC checkout", "Base payments", "crypto payment integration"],
  "/docs/getting-started": ["accept USDC", "payment integration"],
  "/docs/developers": ["developer payment API", "crypto checkout API"],
  "/docs/api-reference": ["Outpay REST API", "payment API reference"],
  "/docs/webhooks": ["payment webhooks", "checkout.paid webhook"],
  "/docs/merchants": ["merchant payments", "USDC merchant dashboard"],
  "/docs/platform": ["Base blockchain payments", "non-custodial settlement"],
  "/docs/operations": ["payment infrastructure", "payment deployment"],
  "/docs/guides": ["checkout integration guide", "crypto payments guide"],
  "/docs/resources": ["Outpay payment documentation", "USDC payments FAQ"],
  "/docs/changelog": ["Outpay release notes", "payment API changes"],
};

export function keywordsForPath(path: string) {
  const section = Object.keys(keywordMap).find(
    (candidate) => candidate !== "/docs" && path.startsWith(`${candidate}/`),
  );

  return [
    ...new Set([
      ...defaultKeywords,
      ...(keywordMap[path] ?? []),
      ...(section ? keywordMap[section] : []),
    ]),
  ];
}

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonicalUrl = absoluteUrl(path);
  const socialImage = absoluteUrl("/opengraph-image");
  const socialTitle = pageTitle(title);
  const keywords = keywordsForPath(path);

  return {
    title: { absolute: socialTitle },
    description,
    keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "article",
      siteName,
      title: socialTitle,
      description,
      url: canonicalUrl,
      locale: "en_US",
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: "Outpay Docs — USDC payments on Base",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [socialImage],
    },
  };
}

export const siteMetadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Outpay Docs | USDC Payments on Base",
    template: "%s | Outpay Docs",
  },
  description: siteDescription,
  keywords: defaultKeywords,
  applicationName: siteName,
  authors: [{ name: "Outpay" }],
  creator: "Outpay",
  publisher: "Outpay",
  alternates: { canonical: absoluteUrl("/docs") },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName,
    title: "Outpay Docs | USDC Payments on Base",
    description: siteDescription,
    url: absoluteUrl("/docs"),
    locale: "en_US",
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "Outpay Docs — USDC payments on Base",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Outpay Docs | USDC Payments on Base",
    description: siteDescription,
    images: [absoluteUrl("/opengraph-image")],
  },
  icons: {
    icon: "/icon.png",
  },
};

export const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl.toString()}#organization`,
      name: "Outpay",
      url: siteUrl.toString(),
      logo: absoluteUrl("/icon.png"),
    },
    {
      "@type": "WebSite",
      "@id": `${absoluteUrl("/docs")}#website`,
      name: siteName,
      url: absoluteUrl("/docs"),
      description: siteDescription,
      publisher: { "@id": `${siteUrl.toString()}#organization` },
      inLanguage: "en-US",
    },
  ],
};

export function pageStructuredData({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = absoluteUrl(path);
  const parts = path.split("/").filter(Boolean);
  const section = parts[1] && parts[1] !== "docs" ? parts[1] : undefined;
  const sectionNames: Record<string, string> = {
    "api-reference": "API reference",
    changelog: "Changelog",
    developers: "Developers",
    "getting-started": "Getting started",
    guides: "Guides",
    merchants: "Merchants",
    operations: "Operations",
    platform: "Platform",
    resources: "Resources",
    webhooks: "Webhooks",
  };
  const sectionPath = section ? `/docs/${section}` : undefined;
  const breadcrumbs = [
    { name: "Outpay Docs", item: absoluteUrl("/docs") },
    ...(section && path !== sectionPath
      ? [
          {
            name: sectionNames[section] ?? section,
            item: absoluteUrl(`/docs/${section}`),
          },
        ]
      : []),
    { name: title, item: url },
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${url}#article`,
        headline: title,
        description,
        url,
        isPartOf: { "@id": `${absoluteUrl("/docs")}#website` },
        publisher: { "@id": `${siteUrl.toString()}#organization` },
        inLanguage: "en-US",
        keywords: keywordsForPath(path).join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((breadcrumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: breadcrumb.name,
          item: breadcrumb.item,
        })),
      },
      ...(path === "/docs/resources/faq"
        ? [
            {
              "@type": "FAQPage",
              "@id": `${url}#faq`,
              mainEntity: [
                [
                  "Does Outpay custody funds?",
                  "No. Outpay's implemented flow sends USDC directly to the merchant's registered payout wallet.",
                ],
                [
                  "Which networks and currencies are supported?",
                  "Native USDC on Base mainnet is the only network and currency verified by the current release.",
                ],
                [
                  "Are SDKs available?",
                  "No official SDK package is published. Integrate with the REST API using cURL, fetch, or another HTTP client.",
                ],
                [
                  "Can I refund a payment?",
                  "No. Outpay does not currently implement a refund endpoint or automatic refund flow.",
                ],
                [
                  "Does a success redirect prove payment?",
                  "No. Use a verified checkout.paid webhook or a server-side checkout status read.",
                ],
              ].map(([question, answer]) => ({
                "@type": "Question",
                name: question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: answer,
                },
              })),
            },
          ]
        : []),
    ],
  };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

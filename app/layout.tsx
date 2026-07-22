import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/ui/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zeenatshaikh.dev"),
  title: "Zeenat Shaikh | Android & Flutter Developer",
  description:
    "Portfolio of Zeenat Shaikh - Experienced Android & Flutter Developer building beautiful, scalable mobile applications and modern web experiences with clean architecture.",
  keywords: [
    "Zeenat Shaikh",
    "Flutter Developer",
    "Android Developer",
    "Kotlin Developer",
    "Java Mobile Developer",
    "BliXo.tech",
    "SmartKhata",
    "Mobile Software Engineer",
    "Cross-Platform Apps",
  ],
  authors: [{ name: "Zeenat Shaikh" }],
  creator: "Zeenat Shaikh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zeenatshaikh.dev",
    title: "Zeenat Shaikh | Android & Flutter Developer",
    description:
      "Handcrafted mobile applications & modern web experiences built with Flutter, Native Android, Java, Kotlin, and Clean Architecture.",
    siteName: "Zeenat Shaikh Portfolio",
    images: [
      {
        url: "/assets/zeenat_profile.jpg",
        width: 1200,
        height: 630,
        alt: "Zeenat Shaikh - Android & Flutter Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeenat Shaikh | Android & Flutter Developer",
    description:
      "Handcrafted mobile applications & modern web experiences built with Flutter, Native Android, Java, Kotlin, and Clean Architecture.",
    images: ["/assets/zeenat_profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Zeenat Shaikh",
    jobTitle: "Android & Flutter Developer",
    worksFor: {
      "@type": "Organization",
      name: "BliXo.tech",
    },
    knowsAbout: [
      "Flutter",
      "Android SDK",
      "Kotlin",
      "Java",
      "Dart",
      "Firebase",
      "SQLite",
      "PostgreSQL",
    ],
    url: "https://zeenatshaikh.dev",
    image: "/assets/zeenat_profile.jpg",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased selection:bg-[#5B5FEF] selection:text-white`}
      >
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

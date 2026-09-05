import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/ui/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zeenatshaikh.dev"),
  title: {
    default: "Zeenat Shaikh | Android & Flutter Developer",
    template: "%s | Zeenat Shaikh",
  },
  description:
    "Portfolio of Zeenat Shaikh – Experienced Android & Flutter Developer building beautiful, scalable mobile applications and modern web experiences with clean architecture. Founder of BliXo.Tech.",
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
    "Dart Developer",
    "Firebase Developer",
    "React Native alternative",
    "Mobile App Portfolio",
    "Freelance Flutter Developer India",
    "Android SDK Expert",
    "UI UX Mobile",
    "Valsad Gujarat Developer",
    "BCA Graduate Developer",
    "Mechworkx App",
    "Software Startup Founder",
  ],
  authors: [{ name: "Zeenat Shaikh", url: "https://zeenatshaikh.dev" }],
  creator: "Zeenat Shaikh",
  publisher: "BliXo.Tech",
  category: "technology",
  classification: "Software Engineering Portfolio",
  alternates: {
    canonical: "https://zeenatshaikh.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zeenatshaikh.dev",
    title: "Zeenat Shaikh | Android & Flutter Developer",
    description:
      "Handcrafted mobile applications & modern web experiences built with Flutter, Native Android, Java, Kotlin, and Clean Architecture. Founder of BliXo.Tech.",
    siteName: "Zeenat Shaikh Portfolio",
    images: [
      {
        url: "/assets/zeenat_profile.jpg",
        width: 1200,
        height: 630,
        alt: "Zeenat Shaikh – Android & Flutter Developer | BliXo.Tech Founder",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeenat Shaikh | Android & Flutter Developer",
    description:
      "Handcrafted mobile applications & modern web experiences built with Flutter, Native Android, Java, Kotlin, and Clean Architecture.",
    images: ["/assets/zeenat_profile.jpg"],
    creator: "@zeenatshaikh",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-placeholder",
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
    description:
      "Experienced Android and Flutter Developer specializing in cross-platform mobile applications, native Android development, and modern web experiences. Founder of BliXo.Tech.",
    worksFor: {
      "@type": "Organization",
      name: "BliXo.Tech",
      url: "https://blixo.tech",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Dolat Usha Institute",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Valsad",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
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
      "Node.js",
      "Machine Learning",
      "Python",
    ],
    url: "https://zeenatshaikh.dev",
    image: "https://zeenatshaikh.dev/assets/zeenat_profile.jpg",
    email: "zeenatshaikh914215@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Valsad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    sameAs: [
      "https://github.com/Z-oss-tech",
      "https://www.linkedin.com/in/zeenat-shaikh-6bb09930a/",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#7C3AED" />
        <meta name="color-scheme" content="dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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

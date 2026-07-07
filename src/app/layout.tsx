import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageLoader from "@/components/PageLoader";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://sadaf-zahoor-portfolio.vercel.app";
const SITE_TITLE = "Sadaf Zahoor | Front-End Web Developer";
const SITE_DESCRIPTION =
  "Portfolio of Sadaf Zahoor, a Front-End Web Developer and BS Computer Science student from Pakistan, specializing in React, Next.js, and Tailwind CSS. Open to front-end internships and freelance opportunities.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Sadaf Zahoor",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Sadaf Zahoor",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Pakistan",
    "Front-End Internship",
    "Freelance Front-End Developer",
    "Portfolio",
  ],
  authors: [{ name: "Sadaf Zahoor" }],
  creator: "Sadaf Zahoor",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Sadaf Zahoor | Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Sadaf Zahoor - Front-End Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1a30" },
  ],
  width: "device-width",
  initialScale: 1,
};

const themeInitScript = `
(function() {
  try {
    var stored = window.localStorage.getItem("sz-portfolio-theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = stored || (prefersDark ? "dark" : "light");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Applies saved theme before paint to avoid a light/dark flash */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <PageLoader />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}

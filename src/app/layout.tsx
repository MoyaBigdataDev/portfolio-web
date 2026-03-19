import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { ThemeProvider } from "@/lib/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anderson Moya | Big Data & Digital Transformation Consultant",
  description: "Consultant specialized in Big Data and Digital Transformation. Helping organizations leverage data to make smarter decisions.",
  openGraph: {
    title: "Anderson Moya | Big Data & Digital Transformation Consultant",
    description: "Consultant specialized in Big Data and Digital Transformation. Helping organizations leverage data to make smarter decisions.",
    url: "https://anderson-moya-portfolio.vercel.app",
    siteName: "Anderson Moya Portfolio",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anderson Moya | Big Data & Digital Transformation Consultant",
    description: "Consultant specialized in Big Data and Digital Transformation.",
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
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

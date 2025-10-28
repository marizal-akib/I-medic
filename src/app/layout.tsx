import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "I-Medic | Smart, Connected, Compassionate Care in Bangladesh",
  description: "AI-enabled healthcare and home-care support with real doctors and verified carers. Connected Care, Managed by I-Medic.",
  keywords: ["healthcare", "Bangladesh", "home care", "telemedicine", "medical services", "nursing", "elderly care"],
  authors: [{ name: "I-Medic Team" }],
  creator: "I-Medic",
  publisher: "I-Medic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://i-medic.org.bd'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "I-Medic | Smart, Connected, Compassionate Care in Bangladesh",
    description: "AI-enabled healthcare and home-care support with real doctors and verified carers.",
    url: 'https://i-medic.org.bd',
    siteName: 'I-Medic',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "I-Medic | Smart, Connected, Compassionate Care in Bangladesh",
    description: "AI-enabled healthcare and home-care support with real doctors and verified carers.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

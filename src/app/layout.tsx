import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import { Revelar } from "@/components/Revelar";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-manrope", display: "swap" });
const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["700", "800", "900"], variable: "--font-barlow", display: "swap" });

const site = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const metadata: Metadata = {
  metadataBase: new URL(site ? `https://${site}` : "http://localhost:3220"),
  title: "Black Friday PORTANOVA CELL | 10% OFF em ofertas selecionadas",
  description:
    "A Black Friday chegou à PORTANOVA CELL. Consulte celulares, acessórios e assistência técnica pelo WhatsApp. 10% OFF em ofertas selecionadas.",
  authors: [{ name: "PORTANOVA CELL" }],
  openGraph: {
    title: "Black Friday PORTANOVA CELL | 10% OFF",
    description: "Seu próximo celular está mais perto. Conheça as ofertas selecionadas da PORTANOVA CELL e fale com nossa equipe.",
    type: "website",
    locale: "pt_BR",
    images: ["/img/portanova-hero.webp"],
  },
  twitter: { card: "summary_large_image", images: ["/img/portanova-hero.webp"] },
};

export const viewport: Viewport = { themeColor: "#050505", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${barlow.variable}`} suppressHydrationWarning>
      <head>
        {/* Marca que tem JS antes de pintar: só aí os blocos começam escondidos pra entrar ao rolar. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        {children}
        <Revelar />
      </body>
    </html>
  );
}

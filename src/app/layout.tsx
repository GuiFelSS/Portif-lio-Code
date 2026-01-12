import type {Metadata} from "next";
import {Tinos} from "next/font/google";
import "./globals.css";

const tinos = Tinos({
  variable: "--font-tinos",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Portfólio de Guilherme Felipe",
  description: "Portfólio de Guilherme Felipe, desenvolvedor",
  creator: "Guilherme Felipe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${tinos.variable}`}>
        {children}
      </body>
    </html>
  );
}

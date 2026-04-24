import type { Metadata } from "next";
import "../tw-theme.scss";
import { UnifrakturMaguntia, Italianno, Geom, Bangers } from "next/font/google";
import { cn } from "tailwind-variants";

export const metadata: Metadata = {
  title: "Max Randle",
  description: "Max Randle portfolio website",
};

const unifrakturMaguntia = UnifrakturMaguntia({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-unifraktur-maguntia",
});
const italianno = Italianno({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italianno",
});
const geom = Geom({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-geom",
});
const bangers = Bangers({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bangers",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          unifrakturMaguntia.variable,
          italianno.variable,
          geom.variable,
          bangers.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}

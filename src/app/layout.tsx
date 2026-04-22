import type { Metadata } from "next";
import "../tw-theme.scss";

export const metadata: Metadata = {
  title: "Max Randle",
  description: "Max Randle portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

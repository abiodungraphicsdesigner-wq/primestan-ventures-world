import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Primestan Ventures World | Advancing Dental Solutions",
  description:
    "Primestan Ventures World provides dental equipment, repairs, installation, maintenance and technical support solutions.",
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

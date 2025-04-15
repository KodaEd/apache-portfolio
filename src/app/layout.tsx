import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "~/Edrick-Koda/Portfolio",
  description: "KodaSystems/7.7 Server at www.edrickkoda.com Port 80",
  openGraph: {
    title: "~/Edrick-Koda/Portfolio",
    type: "website",
    url: "https://www.edrickkoda.com",
    images: "https://www.edrickkoda.com/og-image.png",
    description: "KodaSystems/7.7 Server at www.edrickkoda.com Port 80",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-['Courier_New'] antialiased bg-white text-black">
        {children}
      </body>
    </html>
  );
}

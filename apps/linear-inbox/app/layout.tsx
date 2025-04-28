import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Linear Inbox",
  description: "Linear Inbox by Novu",
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

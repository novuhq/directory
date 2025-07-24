import type { Metadata } from "next";
import "./globals.css";
import { NovuInitializer } from "@/components/NovuInitializer";

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
      <body>
        <NovuInitializer />
        {children}
      </body>
    </html>
  );
}

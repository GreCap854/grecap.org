
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GRECAP — Green Capital Region Alliance",
  description: "Building Prosperity the Sustainable Way.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

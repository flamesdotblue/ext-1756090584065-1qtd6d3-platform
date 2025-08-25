import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hello World",
  description: "A minimal Next.js + Tailwind CSS Hello World page",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "KPDF | Youth Mentorship",
  description:
    "Kings Patriots Development Foundation empowers youth through mentorship, leadership development, and community impact.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: ["/favicon.png"],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}

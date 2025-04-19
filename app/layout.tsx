import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Tripadvisor: Over a billion reviews & contributions for Hotels, Attractions, Restaurants, and more",
  description:
    "Plan your next trip, read reviews and get travel advice from our community on where to stay and what to do. Find savings on hotels, book the perfect tour or attraction, and reserve a table at the best restaurants.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          id="favicon"
          href="https://static.tacdn.com/favicon.ico?v2"
          type="image/x-icon"
        />
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}

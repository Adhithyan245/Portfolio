import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Neural Quest | Adhithyan Aravind",
  description: "AI, Robotics & Game AI Portfolio - Explore the journey of an AI researcher",
  keywords: "AI, Machine Learning, Robotics, Deep Learning, Neural Networks, Game AI",
  authors: [{ name: "Adhithyan Aravind" }],
  openGraph: {
    title: "The Neural Quest",
    description: "AI, Robotics & Game AI Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

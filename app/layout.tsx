import "./globals.css";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";

import { MainNavbar } from "@/components";

// const inter = Inter({ subsets: ["latin"] });
const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "Find your desired destination anywhere",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <MainNavbar />
        {children}
      </body>
    </html>
  );
}

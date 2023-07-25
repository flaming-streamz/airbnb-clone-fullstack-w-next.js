import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import { ClientComponentOnly, MainNavbar, Modal, RegisterModal } from "@/components";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "Find your desired destination anywhere",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientComponentOnly>
          <RegisterModal />
          <MainNavbar />
        </ClientComponentOnly>
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import { ClientComponentOnly, MainNavbar, LoginModal, RegisterModal } from "@/components";
import ToasterProvider from "@/providers/ToasterProvider";
import getCurrentUser from "@/actions/getCurrentUser";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "Find your desired destination anywhere",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientComponentOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <MainNavbar currentUser={currentUser} />
        </ClientComponentOnly>
        {children}
      </body>
    </html>
  );
}

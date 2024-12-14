import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/CustomerHeader";
import SideBar from "../components/CustomerSideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Customer Dashboard",
  description: "Here you will find your profile details",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-black relative flex">
          {/* Sidebar */}
          <SideBar />
          <main className="flex-1">
            <Header />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

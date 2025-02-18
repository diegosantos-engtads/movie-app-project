import Navbar from "@/components/Navbar";
import "./globals.scss";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <main>
          <div className="root">
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

import Navbar from "@/components/Navbar";
import Providers from "../components/Providers";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IT Bootcamp 2023",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className} style={{backgroundImage:`url(./Asset1.png)`,backgroundPosition:'fixed',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundAttachment:'fixed'}}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}

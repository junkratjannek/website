import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}


{/* <header>
        <div>
        <button type="button" onClick={() => router.push("/about")} className="bg-gray-700 text-blue-500 w-20 rounded-lg pt-1 pb-1 pl-3 pr-3">About</button> 
      <button type="button" onClick={() => router.push("/projects")} className="bg-gray-700 text-blue-500 w-20 rounded-lg pt-1 pb-1 pl-3 pr-3">Projects</button>
    <button type="button" onClick={() => router.push("/Business")} className="bg-gray-700 text-blue-500 w-32 rounded-lg pt-1 pb-1 pl-3 pr-3">Business</button>  
    <button type="button" onClick={() => router.push("/travel")} className="bg-gray-700 text-blue-500 w-32 rounded-lg pt-1 pb-1 pl-3 pr-3">Travel</button> </div></header>
   */}
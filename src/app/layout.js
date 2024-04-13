import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Page",
  description: "Page description",
  keywords: "Page keywords",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <Navbar></Navbar>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}

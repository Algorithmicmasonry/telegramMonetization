import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "../components/ui/toaster";
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // You can add any other weights needed
  display: "swap",
});

export const metadata = {
  title:"GroupGuard",
  description:
    "This is the starter kit i hope to use for my future projects, as i improve, i will imporove on it",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <main>{children}</main>
        <Toaster/>
        <Analytics />
      </body>
    </html>
  );
}

"use client";

import { ThemesProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { UserProvider } from "@/providers/UserProvider";
import { AuthProvider } from "@/providers/AuthProvider";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // You can add any other weights needed
  display: "swap",
});

const SiteLayout = ({ children }) => {
  const path = usePathname();
  return (
    <ThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <AuthProvider>
        <UserProvider>
          <div className={`${poppins.className} `}>
            { path.startsWith("/site/invite/") || path.startsWith("/site/confirm/") ? "" : <Navbar />}
            {children}
          </div>
        </UserProvider>
      </AuthProvider>
    </ThemesProvider>
  );
};

export default SiteLayout;

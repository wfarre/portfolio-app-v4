import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  adjustFontFallback: false,
});

export const metadata = {
  title: "William Farre",
  description: "William Farre's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative bg-slate-300/20 text-sm text-slate-600 sm:text-base`}
      >
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}

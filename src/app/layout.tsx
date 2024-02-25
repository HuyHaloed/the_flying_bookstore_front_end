import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../utils/theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const main_font = Montserrat({ subsets: ["vietnamese"] });
const sub_font = Montserrat({ subsets: ["vietnamese"] }); // don't know when to use it

export const metadata: Metadata = {
  title: "The Flying Bookstore 📚",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={main_font.className}>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeProvider theme={theme}>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">{children}</main>
            </div>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
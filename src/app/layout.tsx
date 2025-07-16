import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import { Suspense } from "react";
import Loading from "./loading";


const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const preahvihear = localFont({
  src: "../../public/fonts/Preahvihear-Regular.ttf",
  variable: "--font-preahvihear",
})

export const metadata: Metadata = {
  title: "Home",
  description: "Build and deploy on the AI Cloud. Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${comfortaa.variable} ${preahvihear.variable} antialiased`}
      >
        <ErrorBoundary errorComponent={Error}>
          <NavbarComponent />
          <Suspense fallback={<Loading/>}>
            {children}
          </Suspense>
        </ErrorBoundary>
      </body>
    </html>
  );
}

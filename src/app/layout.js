import { ThemeModeScript } from "flowbite-react";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  variable: "--font-tajawal",
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Kankoussa Medai",
  description: "منصة الأكثر متابع في ولاية لعصابه و الحوضين",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body className={`${tajawal.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

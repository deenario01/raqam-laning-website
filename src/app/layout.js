import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RAQAM",
  description: "RAQAM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <meta charSet="utf-8" />
          <title>RAQAM</title>
          <meta name="description" content="Morden Bootstrap HTML5 Template" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" type="image/x-icon" href="/assets/img/tab_logo.png" />
          {/* ======= All CSS Plugins here ======== */}
          <link rel="stylesheet" href="/assets/css/plugins/swiper-bundle.min.css" />
          <link rel="stylesheet" href="/assets/css/plugins/glightbox.min.css" />
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          />
          {/* Plugin css */}
          <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
          {/* Custom Style CSS */}
          <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="app-wrapper">
          {children}
        </div>

        <Script src="/assets/js/vendor/popper.js" defer="defer"></Script>
        <Script src="/assets/js/vendor/bootstrap.min.js" defer="defer"></Script>
        <Script src="/assets/js/plugins/swiper-bundle.min.js" defer="defer"></Script>
        <Script src="/assets/js/plugins/glightbox.min.js" defer="defer"></Script>

        <Script src="/assets/js/script.js" defer="defer"></Script>
  
      </body>
    </html>
  );
}
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/layout/navbar/Navbar";
import Footer from "@/layout/footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL("https://www.locksmithysl.com"),
  title: {
    default: "YLS SERVICES",
    template: "%s | YLS SERVICES",
  },
  description: "locksmit services 24hr, Are you locked out of your home or car? We can send someone to help Now!",
  keywords:
    "NYC locksmith, Manhattan locksmith, Brooklyn locksmith, 24/7 locksmith, emergency locksmith, lockouts, lock installation, security systems, fast locksmith, reliable locksmith",
    type: "website"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* <Navbar/> */}
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}

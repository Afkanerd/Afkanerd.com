import { JetBrains_Mono, Silkscreen } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-silkscreen",
});

export const metadata = {
  title: "AFKANERD",
  description:
    "Afkanerd is an open source software development company that builds technology for digital rights, security, and privacy.",
  icons: {
    icon: "/images/favicon1.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${jetbrains.variable} ${silkscreen.variable}`}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

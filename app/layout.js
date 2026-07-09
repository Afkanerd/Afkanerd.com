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
  metadataBase: new URL("https://afkanerd.com"),
  title: {
    default: "AFKANERD",
    template: "%s | AFKANERD",
  },
  description:
    "Afkanerd is an open source software development team that builds technology for digital rights, security, and privacy.",
  keywords: [
    "AFKANERD",
    "SMSWithoutBorders",
    "ShortMesh",
    "RelaySMS",
    "DekuSMS",
    "open source",
    "digital rights",
    "privacy",
    "security",
    "Africa",
  ],
  openGraph: {
    title: "AFKANERD",
    description:
      "Afkanerd builds open technology for digital rights, security, and privacy.",
    url: "https://afkanerd.com",
    siteName: "AFKANERD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AFKANERD",
    description:
      "Afkanerd builds open technology for digital rights, security, and privacy.",
  },
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

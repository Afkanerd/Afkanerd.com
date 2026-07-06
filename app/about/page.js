import AboutPage from "@/js/about";

export const metadata = {
  title: "About",
  description:
    "Learn about AFKANERD's mission, principles, and open approach to building resilient privacy-first technology.",
  alternates: {
    canonical: "/about",
  },
};

export default function Page() {
  return <AboutPage />;
}

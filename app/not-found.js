import NotFoundPage from "@/components/NotFoundPage";

export const metadata = {
  title: "404",
  description: "The requested page could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <NotFoundPage />;
}

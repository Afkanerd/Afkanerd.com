import Projects from "@/js/projects";

export const metadata = {
  title: "Projects",
  description:
    "Explore AFKANERD open-source projects including SMSWithoutBorders, ShortMesh, and supporting tools.",
  alternates: {
    canonical: "/projects",
  },
};

export default function Page() {
  return <Projects />;
}

import { BackButton } from "@/components/ui/back-button";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { "election-slug": string };
}): Promise<Metadata> {
  const electionSlug = params["election-slug"];
  return {
    title: `Election: ${electionSlug}`,
    description: `Details for election ${electionSlug}`,
    openGraph: {
      title: `${electionSlug} Election Detail`,
      description: `Details for election ${electionSlug}`,
    },
  };
}

export default function ElectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start relative h-[calc(100lvh-96px)] md:h-[calc(100lvh-64px)]">
      <div className="py-4">
        <BackButton />
      </div>
      {children}
    </div>
  );
}

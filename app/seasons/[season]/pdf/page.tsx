
import path from "path";
import fs from "fs/promises";
import { notFound } from "next/navigation";
import { Color } from "@/interfaces/colors";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ season: string }>;
}): Promise<Metadata> {
  const { season } = await params;

  const seasonName = season
    .replaceAll("-", " ")
    .replace(/\b\w/g, l => l.toUpperCase());

  return {
    title: `${seasonName}`,
    description: `${seasonName}`,
  };
}


async function getColors(season: string) {
  try {
    const file = await fs.readFile(
      path.join(
        process.cwd(),
        "data",
        `${season.replaceAll("-", "_")}.json`
      ),
      "utf8"
    );
    return JSON.parse(file);
  } catch {
    notFound();
  }
}

export default async function SeasonPage({
  params,
}: {
  params: Promise<{ season: string }>;
}) {
  const { season } = await params;

  const colors = await getColors(season);

  return (
    <>

      {colors.colors.map((color: Color) => (
        <div
          key={color.code}
          className="pdf-page mx-auto w-[90mm] h-[195mm] flex flex-col overflow-hidden"
        >
          <div
            className="flex-1"
            style={{ backgroundColor: color.hex }}
          />

          <div className="h-24 px-12 flex flex-col justify-center bg-white text-black text-lg leading-5">
            <p className="uppercase aeonik-light">
              Pantone
            </p>

            <p>{color.code}</p>

            <p>{color.name}</p>
          </div>
        </div>
      ))}
    </>
  );
}
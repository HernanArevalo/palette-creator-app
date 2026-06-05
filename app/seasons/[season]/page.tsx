
import path from "path";
import fs from "fs/promises";
import { notFound } from "next/navigation";
import { Color } from "@/interfaces/colors";
import { BackButton, ExportPdfButton } from "@/components";

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
    console.log(JSON.parse(file))
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
    <div className="px-12 py-2">
      <div className="flex flex-row gap-2">
      <BackButton />
      <ExportPdfButton />
      </div>
      <h1 className="text-3xl font-bold text-black dark:text-zinc-50 mb-5 capitalize mt-10">
        {season.replaceAll("-", " ")}
      </h1>
      <div className="flex flex-col gap-2 w-full justify-center items-center">

        {colors.colors.map((color: Color) => (
          <div
            key={color.code}
            className="w-[90mm] h-[195mm] overflow-hidden bg-zinc-100"
          >
            <div
              className="h-[85%] w-full"
              style={{ backgroundColor: color.hex }}
            />

            <div className="h-[15%] py-4 px-12 flex flex-col justify-center bg-white text-black text-lg leading-5">
              <p className="uppercase aeonik-light font-light">
                Pantone
              </p>

              <p className="font-regularr">
                {color.code}
              </p>

              <p className="font-regular">
                {color.name}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
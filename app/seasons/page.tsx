import data from "@/data/true_winter.json"
import colors from "@/data/colors.json"

export default function Home() {


	return (
		<div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black w-full">
			<main className="flex flex-1 w-full flex-col items-center justify-between p-16 bg-white dark:bg-black sm:items-start">
				<h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
					Seasons Colors
				</h1>
				<div className="w-full h-px bg-zinc-200 my-8" />

					<div className="flex flex-row flex-wrap gap-3 w-full justify-center items-center">
						{ colors.seasons.map((season) => (
							<a key={season.name} href={`/seasons/${season.name.replaceAll(' ', '-').toLowerCase()}`}>
								<div className="items-start gap-2 bg-gray-200 px-4 py-2 text-black text-center hover:bg-gray-500 transition-all">
									{season.name}
								</div>
							</a>
						)) }
					</div>

				<div className="w-full h-px bg-zinc-200 my-8" />
				<h2 className="text-2xl font-bold text-black dark:text-zinc-50 mb-5">Some Colors</h2>
				<div className="grid grid-cols-6 justify-center items-center w-full gap-4" style={{ gridTemplateColumns: "repeat(6, minmax(0, 1fr))" }}>
					{data["colors"].map((color) => (
						<div key={color.code} className="flex flex-col items-center gap-0">
							<div className="w-full h-16" style={{ backgroundColor: `${color.hex}` }}></div>
							<span className="text-black dark:text-zinc-50">{color.name}</span>
							<span className="text-black dark:text-zinc-50">{color.code}</span>
						</div>
					))}
				</div>
			</main>
		</div>
	)
}
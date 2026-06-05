"use client"

export function ExportPdfButton () {
  return (
        <button className="cursor-pointer bg-mist-200 hover:bg-mist-500 transition-all text-black font-bold py-2 px-4 rounded" 
                onClick={() => window.open(window.location.pathname + "/pdf")}>
        PDF
      </button>
  )
}

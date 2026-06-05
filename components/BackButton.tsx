"use client"

export function BackButton () {
  return (
        <button className="cursor-pointer bg-mist-200 hover:bg-mist-500 transition-all text-black font-bold py-2 px-4 rounded" onClick={() => window.history.back()}>
        Back
      </button>
  )
}

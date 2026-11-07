const STATS = [
  { number: '01', label: 'Foundations' },
  { number: '06', label: 'Redemption' },
  { number: '12', label: 'Civic Echo' },
  { number: '14', label: 'Conclusion' },
]

function DarkBanner() {
  return (
    <section className="bg-[#1a153f] px-4 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <p className="mb-5 font-sans text-xs font-bold uppercase tracking-[0.28em] text-brand-orange sm:text-sm">
          Start Here
        </p>

        <h2 className="mb-10 max-w-5xl font-condensed text-5xl uppercase leading-[0.92] tracking-[0.02em] text-[#f5f0ea] sm:mb-12 sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          Please read this with
          <br className="hidden sm:block" /> an open mind.
        </h2>

        <div className="mb-16 flex flex-col items-center justify-center gap-3 sm:mb-20 sm:flex-row sm:flex-wrap sm:gap-4">
          <button
            type="button"
            className="rounded-full bg-brand-orange px-7 py-3.5 font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#180c3c] transition hover:brightness-110"
          >
            Read Chapter 1 Free
          </button>
          <button
            type="button"
            className="rounded-full border border-[#f5f0ea]/80 bg-transparent px-7 py-3.5 font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#f5f0ea] transition hover:bg-[#f5f0ea]/10"
          >
            Find Your Starting Chapter
          </button>
          <button
            type="button"
            className="rounded-full border border-[#f5f0ea]/80 bg-transparent px-7 py-3.5 font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#f5f0ea] transition hover:bg-[#f5f0ea]/10"
          >
            Watch the Trailer
          </button>
        </div>

        <div className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-5">
          {STATS.map((stat) => (
            <div
              key={stat.number}
              className="flex flex-col items-start rounded-lg border border-[#f5f0ea]/15 px-5 py-6 text-left sm:px-6 sm:py-7"
            >
              <span className="font-condensed text-4xl leading-none tracking-tight text-brand-orange sm:text-5xl">
                {stat.number}
              </span>
              <span className="mt-3 font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#f5f0ea] sm:text-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DarkBanner

function PromoBar() {
  return (
    <div className="w-full bg-[#000000] px-4 py-2.5 text-center">
      <p className="font-condensed text-xs uppercase tracking-widest text-white">
        Free Shipping Over $75
        <span className="mx-2.5 text-brand-orange" aria-hidden="true">
          •
        </span>
        Signed Copies by Request
        <span className="mx-2.5 text-brand-orange" aria-hidden="true">
          •
        </span>
        Audiobook Sample Free
      </p>
    </div>
  )
}

export default PromoBar

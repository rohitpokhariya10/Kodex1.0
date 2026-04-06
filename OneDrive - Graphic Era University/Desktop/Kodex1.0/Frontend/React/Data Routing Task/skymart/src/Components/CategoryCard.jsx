function CategoryCard({ emoji, label, count }) {
  return (
    <a
      className="shine-card group bg-[#111] border border-white/80 hover:border-white/20 hover:bg-[#131313] rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(0,0,0,0.3)]"
      href={`/products?category=${label.toLowerCase()}`}
    >
      <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-white/10 flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
        {emoji}
      </div>
      <p className="font-body font-semibold text-white/90 text-sm capitalize">{label}</p>
      <p className="text-white/50 text-xs mt-1">{count} items</p>
    </a>
  )
}

export default CategoryCard

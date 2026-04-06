function FeatureCard({ iconClass, iconColor = '', title, subtitle }) {
  return (
    <div className="group shine-card bg-[#111] border border-white/80 rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(0,0,0,0.24)]">
      <i className={`${iconClass} text-xl ${iconColor} transition-transform duration-300 group-hover:scale-110`}></i>
      <div>
        <p className="font-body font-semibold text-white/80 text-sm">{title}</p>
        <p className="text-white/30 text-xs">{subtitle}</p>
      </div>
    </div>
  )
}

export default FeatureCard

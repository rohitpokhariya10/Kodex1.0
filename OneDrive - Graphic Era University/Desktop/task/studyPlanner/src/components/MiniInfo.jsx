const MiniInfo = ({ label, value }) => {
  return (
    <div className="rounded-2xl border border-cyan-300/10 bg-slate-950/45 px-3 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.16)]">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-200/60">
        {label}
      </p>
      <p className="mt-2 text-sm font-semibold text-white">{value}</p>
    </div>
  );
};

export default MiniInfo;

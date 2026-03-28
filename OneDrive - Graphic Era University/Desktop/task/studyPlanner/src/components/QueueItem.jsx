const QueueItem = ({ label, count, dot }) => {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-cyan-300/10 bg-slate-950/45 px-4 py-3 shadow-[0_8px_20px_rgba(15,23,42,0.16)]">
      <div className="flex items-center gap-3">
        <span className={`h-3 w-3 rounded-full ${dot}`} />
        <span className="text-sm font-medium text-slate-200">{label}</span>
      </div>
      <span className="text-sm font-semibold text-white">{count}</span>
    </div>
  );
};

export default QueueItem;

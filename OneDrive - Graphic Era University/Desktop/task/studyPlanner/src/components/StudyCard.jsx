import MiniInfo from "./MiniInfo";
import PriorityBadge from "./PriorityBadge";
import { formatMinutes, parseDurationToMinutes } from "../utils/studyStats";

const StudyCard = ({ item, onDelete, onToggleComplete }) => {
  return (
    <article className="glass-panel p-5 transition hover:-translate-y-1">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-200/75">{item.subject}</p>
          <h4 className="mt-1 text-xl font-semibold text-white">
            {item.name}
          </h4>
        </div>
        <PriorityBadge priority={item.priority} />
      </div>

      <p className="mt-4 line-clamp-3 min-h-[4.5rem] break-words text-sm leading-6 text-slate-300">
        {item.note || "No notes added yet."}
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <MiniInfo label="Planned" value={formatMinutes(parseDurationToMinutes(item.duration))} />
        <MiniInfo label="Date" value={item.date} />
      </div>

      <div className="mt-5 flex items-center justify-end">
        <button
          type="button"
          onClick={() => onToggleComplete(item)}
          disabled={item.completion}
          className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
            item.completion
              ? "cursor-not-allowed bg-emerald-100 text-emerald-700"
              : "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-400 hover:to-orange-500"
          }`}
        >
          {item.completion ? "Completed" : "Mark Complete"}
        </button>
        <button
          type="button"
          onClick={() => onDelete(item.id)}
          className="ml-2 rounded-xl border border-cyan-300/10 px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-900/80 hover:text-white"
        >
          Delete
        </button>
      </div>
    </article>
  );
};

export default StudyCard;

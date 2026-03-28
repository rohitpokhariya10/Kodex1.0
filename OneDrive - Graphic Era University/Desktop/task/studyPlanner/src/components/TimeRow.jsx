const TimeRow = ({ day, time, width, isToday }) => {
  return (
    <div>
      <div
        className={`mb-2 flex items-center justify-between text-sm ${
          isToday ? "font-semibold text-white" : "text-slate-300"
        }`}
      >
        <span>
          {day}
          {isToday ? " | Today" : ""}
        </span>
        <span>{time}</span>
      </div>
      <div className="h-2.5 rounded-full bg-slate-900/70">
        <div
          className="h-full rounded-full bg-gradient-to-r from-teal-600 via-emerald-500 to-amber-400"
          style={{ width }}
        />
      </div>
    </div>
  );
};

export default TimeRow;

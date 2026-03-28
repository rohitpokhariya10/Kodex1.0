const PriorityBadge = ({ priority }) => {
  const styles = {
    High: "bg-red-100 text-red-700 ring-1 ring-red-200",
    Medium: "bg-amber-100 text-amber-700 ring-1 ring-amber-200",
    Low: "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200",
  };

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[priority]}`}>
      {priority}
    </span>
  );
};

export default PriorityBadge;

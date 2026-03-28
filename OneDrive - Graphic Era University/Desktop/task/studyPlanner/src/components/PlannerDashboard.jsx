import StudyPlanForm from "./StudyPlanForm";
import StudyPlansView from "./StudyPlansView";

const PlannerDashboard = ({ activeView, setActiveView }) => {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <div className="glass-panel overflow-hidden p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <span className="hero-chip">FocusForge Workspace</span>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Turn messy study plans into a clean execution board.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Build focused sprints, watch weekly momentum, and keep every target moving inside one bold dashboard.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="rounded-full border border-cyan-300/12 bg-slate-950/40 px-4 py-2">Smart task queue</span>
              <span className="rounded-full border border-cyan-300/12 bg-slate-950/40 px-4 py-2">Weekly progress view</span>
              <span className="rounded-full border border-cyan-300/12 bg-slate-950/40 px-4 py-2">Fast session planning</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[1.75rem] border border-cyan-300/10 bg-slate-950/40 p-5 text-slate-100">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">System Name</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">FocusForge</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                A sharper front end for your daily study missions.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setActiveView("make-plan")}
              className="primary-btn text-left"
            >
              Launch new sprint
            </button>
            <button
              type="button"
              onClick={() => setActiveView("see-plans")}
              className="secondary-btn text-left"
            >
              Open mission board
            </button>
          </div>
        </div>
      </div>

      {activeView === "make-plan" ? (
        <StudyPlanForm onCreatePlan={() => setActiveView("see-plans")} />
      ) : (
        <StudyPlansView />
      )}
    </section>
  );
};

export default PlannerDashboard;

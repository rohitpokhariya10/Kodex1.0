import { useState } from "react";
import Navbar from "./components/Navbar";
import PlannerDashboard from "./components/PlannerDashboard";

const App = () => {
  const [activeView, setActiveView] = useState("see-plans");

  return (
    <main className="min-h-screen bg-[var(--page-bg)] text-slate-900">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-[-6rem] top-24 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/3 h-80 w-80 rounded-full bg-sky-500/12 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      </div>
      <Navbar activeView={activeView} setActiveView={setActiveView} />
      <PlannerDashboard activeView={activeView} setActiveView={setActiveView} />
    </main>
  );
};

export default App;

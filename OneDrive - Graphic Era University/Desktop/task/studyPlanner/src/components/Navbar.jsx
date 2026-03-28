import React, { useState } from 'react'

const Navbar = ({ activeView, setActiveView }) => {
    const [open, setOpen] = useState(false);

    const navItems = [
        { label: "Create Sprint", value: "make-plan" },
        { label: "Mission Board", value: "see-plans" },
    ];

    return (
        <nav className='sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8'>
            <div className='mx-auto flex w-full max-w-7xl items-center justify-between rounded-[1.9rem] border border-cyan-300/10 bg-[rgba(7,19,31,0.86)] px-5 py-4 text-slate-100 shadow-[0_22px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl'>
            <button
                type="button"
                onClick={() => {
                    setActiveView("see-plans");
                    setOpen(false);
                }}
                className='flex items-center gap-3 text-left'
            >
                <span className='flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-cyan-400 text-base font-black text-slate-950'>F</span>
                <span>
                    <p className='text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-cyan-200/80'>Deep Work OS</p>
                    <h1 className='text-xl font-semibold text-white'>Focus<span className='text-orange-400'>Forge</span></h1>
                </span>
            </button>
            <ul className={`fixed inset-x-4 top-[5.5rem] rounded-[1.75rem] border border-cyan-300/12 bg-[rgba(7,19,31,0.96)] p-4 shadow-[0_18px_35px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:static sm:inset-auto sm:flex sm:w-auto sm:items-center sm:gap-2 sm:rounded-full sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none ${open ? "block" : "hidden"} sm:block`}>
                {navItems.map((item) => (
                    <li key={item.value}>
                        <button
                            type="button"
                            onClick={() => {
                                setActiveView(item.value);
                                setOpen(false);
                            }}
                            className={`w-full cursor-pointer rounded-full px-4 py-3 text-left text-sm font-semibold transition sm:w-auto sm:py-2 ${activeView === item.value ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-[0_12px_24px_rgba(249,115,22,0.28)]' : 'text-slate-300 hover:bg-slate-900/80 hover:text-white'}`}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
            <div className='hidden items-center gap-3 sm:flex'>
                <div className='rounded-full border border-cyan-300/10 bg-slate-950/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200/80'>
                    Track. Execute. Repeat.
                </div>
            </div>
            <button type="button" onClick={() => setOpen(prev => !prev)} className='flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/10 bg-slate-950/70 text-slate-100 transition hover:bg-slate-900 sm:hidden'>
                <div className='flex h-3.5 flex-col justify-between'>
                    <span className={`h-0.5 inline-block w-4 rounded bg-current ${open && "translate-y-1.5 rotate-45"} transition-all ease-linear duration-300`}></span>
                    <span className={`h-0.5 inline-block w-4 rounded bg-current ${open && "opacity-0"} transition-all ease-linear duration-300`}></span>
                    <span className={`h-0.5 inline-block w-4 rounded bg-current ${open && "-translate-y-1.5 -rotate-45"} transition-all ease-linear duration-300`}></span>
                </div>
            </button>
            </div>
        </nav>
    )
}

export default Navbar

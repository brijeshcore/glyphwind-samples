import { Button, TextField, Label, Input } from 'react-aria-components';

function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-surface-lowest c-fg font-sans">
      <aside className="w-64 border-r border-border flex-shrink-0 flex flex-col p-6 bg-surface z-10">
        <div className="row items-center gap-3 mb-12">
          <span className="dot dot-md animate-led-fast"></span>
          <span className="font-dot text-xl font-bold tracking-widest c-fg">GLYPHWIND</span>
        </div>
        
        <div className="stack gap-6 flex-1">
          <div>
            <span className="label c-muted mb-4 block">Menu</span>
            <div className="stack gap-1">
              <a href="#" className="row-between px-3 py-2 radius-md bg-surface-high c-fg transition-fast">
                <div className="row items-center gap-3 font-medium">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                  Dashboard
                </div>
              </a>
              <a href="#" className="row-between px-3 py-2 radius-md hover:bg-surface-high c-muted hover:c-fg transition-fast">
                <div className="row items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                  Tasks
                </div>
                <span className="badge badge-default t-mono">12+</span>
              </a>
              <a href="#" className="row-between px-3 py-2 radius-md hover:bg-surface-high c-muted hover:c-fg transition-fast">
                <div className="row items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  Calendar
                </div>
              </a>
              <a href="#" className="row-between px-3 py-2 radius-md hover:bg-surface-high c-muted hover:c-fg transition-fast">
                <div className="row items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
                  Analytics
                </div>
              </a>
            </div>
          </div>
          
          <div>
            <span className="label c-muted mb-4 block">General</span>
            <div className="stack gap-1">
              <a href="#" className="row-between px-3 py-2 radius-md hover:bg-surface-high c-muted hover:c-fg transition-fast">
                <div className="row items-center gap-3">
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                  Settings
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="card bg-foreground c-surface mt-auto overflow-hidden relative border-none">
          <div className="absolute inset-0 bg-dots bg-dots-grid bg-dots-muted opacity-20"></div>
          <div className="relative z-10">
            <h4 className="font-medium mb-1">Download App</h4>
            <p className="t-body-sm c-subtle mb-4">Stay connected.</p>
            <Button className="btn btn-secondary w-full border-ghost bg-surface-highest text-foreground">Download</Button>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        <header className="row-between px-10 py-6 border-b border-border glass sticky top-0 z-40 w-full">
          <TextField className="relative w-72">
            <svg className="absolute left-3 top-2.5 c-subtle" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <Input className="input pl-10 w-full" placeholder="Search tasks ⌘F" />
          </TextField>
          <div className="row gap-4">
            <Button className="btn btn-ghost btn-icon radius-full"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></Button>
            <Button className="btn btn-ghost btn-icon radius-full"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg></Button>
            <div className="h-8 w-8 radius-full bg-surface-high border-border flex items-center justify-center font-medium border">B</div>
          </div>
        </header>

        <div className="p-10 stack gap-8">
          <div className="row-between">
            <div>
              <h1 className="t-display text-4xl mb-1">Dashboard</h1>
              <p className="t-body-sm c-muted">Plan, prioritize, and accomplish your tasks.</p>
            </div>
            <div className="row gap-3">
              <Button className="btn btn-secondary">Import Data</Button>
              <Button className="btn btn-primary"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>Add Project</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card bg-foreground text-surface border-border relative overflow-hidden group hover:-translate-y-1 transition-default shadow-float-light">
              <div className="absolute right-4 top-4 bg-surface-lowest c-fg p-1.5 radius-full group-hover:bg-surface-high transition-fast">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </div>
              <div className="t-body-sm c-subtle mb-4 relative z-10">Total Projects</div>
              <div className="dot-display dot-display-xl mb-4 relative z-10">24</div>
              <div className="row-sm border-t border-border pt-4 relative z-10">
                <span className="badge badge-active t-mono">5 ▲</span>
                <span className="t-body-sm c-subtle">vs last month</span>
              </div>
            </div>

            <div className="card bg-surface-card border-border hover:surface-shift hover:-translate-y-1 transition-default relative group">
              <div className="absolute right-4 top-4 border border-border p-1.5 radius-full group-hover:bg-surface-high transition-fast">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </div>
              <div className="t-body-sm c-muted mb-4">Ended Projects</div>
              <div className="dot-display dot-display-xl c-fg mb-4">10</div>
              <div className="row-sm border-t border-border pt-4">
                <span className="badge badge-default t-mono c-muted">6 ▲</span>
                <span className="t-body-sm c-muted">vs last month</span>
              </div>
            </div>

            <div className="card bg-surface-card border-border hover:surface-shift hover:-translate-y-1 transition-default relative group">
               <div className="absolute right-4 top-4 border border-border p-1.5 radius-full group-hover:bg-surface-high transition-fast">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </div>
              <div className="t-body-sm c-muted mb-4">Running Projects</div>
              <div className="dot-display dot-display-xl c-fg mb-4">12</div>
              <div className="row-sm border-t border-border pt-4">
                <span className="badge badge-default t-mono c-muted">2 ▲</span>
                <span className="t-body-sm c-muted">vs last month</span>
              </div>
            </div>

            <div className="card bg-surface-card border-border hover:surface-shift hover:-translate-y-1 transition-default relative group">
              <div className="absolute right-4 top-4 border border-border p-1.5 radius-full group-hover:bg-surface-high transition-fast">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </div>
              <div className="t-body-sm c-muted mb-4">Pending Projects</div>
              <div className="dot-display dot-display-xl c-fg mb-4">2</div>
              <div className="row-sm border-t border-border pt-4">
                <span className="dot dot-sm bg-ink-subtle"></span>
                <span className="t-body-sm c-muted">Requires discussion</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-5 card bg-surface-card border-border flex flex-col p-6">
              <h3 className="t-h3 mb-10">Project Analytics</h3>
              <div className="flex-1 flex items-end justify-between gap-2 mt-auto pb-4 px-2">
                <div className="stack items-center gap-2 w-full">
                  <div className="w-full bg-surface-high radius-md relative flex items-end" style={{height: "140px"}}>
                     <div className="w-full bg-ink-ghost radius-md transition-slow hover:bg-ink-muted" style={{height: "40%"}}></div>
                  </div>
                  <span className="label">S</span>
                </div>
                <div className="stack items-center gap-2 w-full">
                  <div className="w-full bg-surface-high radius-md relative flex items-end" style={{height: "140px"}}>
                     <div className="w-full bg-foreground radius-md transition-slow" style={{height: "65%"}}></div>
                  </div>
                  <span className="label">M</span>
                </div>
                <div className="stack items-center gap-2 w-full relative">
                  <div className="absolute -top-10 bg-foreground text-surface t-mono text-xs px-2 py-1 radius-md shadow-float-light">74%</div>
                  <div className="w-full bg-surface-highest radius-md relative flex items-end overflow-hidden" style={{height: "140px"}}>
                     <div className="w-full bg-signal radius-md transition-slow" style={{height: "74%"}}></div>
                  </div>
                  <span className="label c-signal">T</span>
                </div>
                <div className="stack items-center gap-2 w-full">
                  <div className="w-full bg-surface-high radius-md relative flex items-end" style={{height: "140px"}}>
                     <div className="w-full bg-foreground radius-md transition-slow" style={{height: "85%"}}></div>
                  </div>
                  <span className="label">W</span>
                </div>
                <div className="stack items-center gap-2 w-full">
                  <div className="w-full bg-surface-high radius-md relative flex items-end" style={{height: "140px"}}>
                     <div className="w-full bg-ink-ghost radius-md transition-slow hover:bg-ink-muted" style={{height: "50%"}}></div>
                  </div>
                  <span className="label">T</span>
                </div>
                <div className="stack items-center gap-2 w-full">
                  <div className="w-full bg-surface-high radius-md relative flex items-end" style={{height: "140px"}}>
                     <div className="w-full bg-ink-ghost radius-md transition-slow hover:bg-ink-muted" style={{height: "40%"}}></div>
                  </div>
                  <span className="label">F</span>
                </div>
                <div className="stack items-center gap-2 w-full">
                  <div className="w-full bg-surface-high radius-md relative flex items-end" style={{height: "140px"}}>
                     <div className="w-full bg-ink-ghost radius-md transition-slow hover:bg-ink-muted" style={{height: "60%"}}></div>
                  </div>
                  <span className="label">S</span>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-3 card bg-surface-card border-border flex flex-col justify-between p-6">
              <div>
                <h3 className="t-h3 mb-6">Reminders</h3>
                <div className="t-body font-medium leading-snug mb-2">Architectural Review</div>
                <div className="t-body-sm c-muted t-mono">14:00 - 16:00 UTC</div>
              </div>
              <Button className="btn btn-primary w-full mt-8">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                Join Call
              </Button>
            </div>

            <div className="col-span-12 lg:col-span-4 card bg-surface-card border-border p-6">
              <div className="row-between mb-6">
                <h3 className="t-h3">Projects</h3>
                <Button className="btn btn-secondary btn-sm"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>New</Button>
              </div>
              <div className="stack gap-4">
                <div className="row gap-4 items-start">
                  <div className="w-8 h-8 radius-md bg-surface-high border border-border flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                  </div>
                  <div>
                    <div className="t-body font-medium">Develop API Entities</div>
                    <div className="t-body-sm c-muted mt-1 font-mono text-xs">Nov 26, 2024</div>
                  </div>
                </div>
                <div className="row gap-4 items-start">
                  <div className="w-8 h-8 radius-md bg-surface-high border border-border flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                  </div>
                  <div>
                    <div className="t-body font-medium">Onboarding Flow</div>
                    <div className="t-body-sm c-muted mt-1 font-mono text-xs">Nov 28, 2024</div>
                  </div>
                </div>
                 <div className="row gap-4 items-start">
                  <div className="w-8 h-8 radius-md bg-surface-high border border-border flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                  </div>
                  <div>
                    <div className="t-body font-medium">Build Dashboard</div>
                    <div className="t-body-sm c-muted mt-1 font-mono text-xs">Nov 30, 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-12">
            <div className="col-span-12 lg:col-span-5 card bg-surface-card border-border p-6">
              <div className="row-between mb-6">
                <h3 className="t-h3">Team</h3>
                <Button className="btn btn-secondary btn-sm">Manage</Button>
              </div>
              <div className="stack gap-5">
                <div className="row-between">
                  <div className="row gap-3">
                     <div className="w-10 h-10 radius-full bg-surface-high border border-border flex items-center justify-center font-medium">AD</div>
                     <div>
                       <div className="t-body font-medium">Alexandra Deff</div>
                       <div className="t-body-sm c-muted">System Architecture</div>
                     </div>
                  </div>
                  <span className="badge badge-default">Completed</span>
                </div>
                <div className="row-between">
                  <div className="row gap-3">
                     <div className="w-10 h-10 radius-full bg-surface-high border border-border flex items-center justify-center font-medium">EA</div>
                     <div>
                       <div className="t-body font-medium">Edwin Adenike</div>
                       <div className="t-body-sm c-muted">User Auth Flow</div>
                     </div>
                  </div>
                  <span className="badge badge-active t-label-md"><span className="dot dot-sm animate-led"></span> Active</span>
                </div>
                 <div className="row-between">
                  <div className="row gap-3">
                     <div className="w-10 h-10 radius-full bg-surface-high border border-border flex items-center justify-center font-medium">IO</div>
                     <div>
                       <div className="t-body font-medium">Isaac Oluwa</div>
                       <div className="t-body-sm c-muted">Search Systems</div>
                     </div>
                  </div>
                  <span className="badge badge-dim t-label-md"><span className="dot dot-sm bg-signal"></span> Blocked</span>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 card bg-surface-card border-border flex flex-col justify-between p-6">
              <h3 className="t-h3 mb-6">Progress</h3>
              <div className="flex-1 flex items-center justify-center relative my-4">
                 <div className="relative flex items-end justify-center overflow-hidden" style={{width: "200px", height: "100px"}}>
                    <div className="absolute top-0 left-0 w-full h-[200px] radius-full border-[24px] border-surface-high border-b-transparent border-l-transparent transform -rotate-45"></div>
                    <div className="absolute top-0 left-0 w-full h-[200px] radius-full border-[24px] border-foreground border-b-transparent border-l-transparent transform -rotate-[135deg]"></div>
                    
                    <div className="stack items-center mb-[-0.5rem]">
                      <span className="dot-display dot-display-lg text-4xl">41%</span>
                      <span className="t-label-md c-muted">Phase 1</span>
                    </div>
                 </div>
              </div>
              <div className="row justify-center gap-4 mt-6">
                <span className="row-sm t-body-sm c-muted"><span className="dot dot-sm bg-foreground"></span> Completed</span>
                <span className="row-sm t-body-sm c-muted"><span className="dot dot-sm bg-surface-high"></span> In Progress</span>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-3 card bg-foreground text-surface border-border flex flex-col justify-between overflow-hidden relative transition-default p-6 border-none">
              <div className="absolute inset-0 bg-dots bg-dots-grid opacity-10"></div>
              <div className="absolute right-6 top-6 dot dot-lg animate-led-fast bg-signal shadow-signal"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h3 className="t-h3 mb-2 flex items-center gap-2">Time Tracker</h3>
                  <p className="t-body-sm c-subtle">Engine Refactor</p>
                </div>
                
                <div className="mt-8 stack items-center w-full">
                  <div className="font-dot text-4xl font-bold tabular-nums mb-8 w-full text-center">
                    01:24:08
                  </div>
                  <div className="row gap-4">
                    <Button className="btn btn-secondary bg-surface-highest border-none text-foreground btn-icon radius-full w-12 h-12 opacity-80 hover:opacity-100 transition-fast" title="Pause">
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                    </Button>
                    <button className="btn btn-critical btn-icon radius-full w-12 h-12 flex relative group hover:scale-105 transition-fast" title="Stop">
                       <div className="w-3 h-3 bg-surface-card radius-sm"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App

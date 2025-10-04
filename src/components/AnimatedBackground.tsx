export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="animate-float absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div
        className="animate-float absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
        style={{ animationDelay: "2s", animationDuration: "8s" }}
      ></div>
      <div
        className="animate-float absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/5 blur-3xl"
        style={{ animationDelay: "4s", animationDuration: "10s" }}
      ></div>

      <div
        className="animate-float absolute top-3/4 left-1/4 h-64 w-64 rounded-full bg-emerald-500/8 blur-3xl"
        style={{ animationDelay: "1s", animationDuration: "9s" }}
      ></div>
      <div
        className="animate-float absolute top-1/3 right-1/3 h-80 w-80 rounded-full bg-sky-500/8 blur-3xl"
        style={{ animationDelay: "3s", animationDuration: "11s" }}
      ></div>

      <div className="bg-grid-pattern absolute inset-0 opacity-[0.02]"></div>

      <div className="animate-scan absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
    </div>
  );
}

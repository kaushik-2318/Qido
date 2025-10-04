import { Logo } from "./Logo";

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 h-96 w-96 animate-pulse rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div
          className="absolute -right-20 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500/20 blur-3xl"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-teal-500/10 blur-3xl"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="relative">
          <div className="absolute inset-0 animate-ping rounded-full bg-cyan-500/30 blur-2xl"></div>
          <div className="relative animate-bounce">
            <Logo className="h-24 w-24" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <h2 className="animate-pulse text-2xl font-bold text-white">
            Loading{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              Qido
            </span>
          </h2>
          <div className="flex gap-2">
            <div
              className="h-2 w-2 animate-bounce rounded-full bg-cyan-400"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="h-2 w-2 animate-bounce rounded-full bg-cyan-400"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="h-2 w-2 animate-bounce rounded-full bg-cyan-400"
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>
        </div>

        <div className="h-1 w-64 overflow-hidden rounded-full bg-gray-800">
          <div className="animate-loading-bar h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
        </div>
      </div>
    </div>
  );
}

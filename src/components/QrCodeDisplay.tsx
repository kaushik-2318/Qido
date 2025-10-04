import { Copy, Download, Loader2 } from "lucide-react";

interface QrCodeDisplayProps {
  qrCodeUrl: string;
  isLoading: boolean;
  showResult: boolean;
  onDownload: () => void;
  onShare: () => void;
  qrBlob: Blob | null;
}

export function QrCodeDisplay({
  qrCodeUrl,
  isLoading,
  showResult,
  onDownload,
  onShare,
  qrBlob,
}: QrCodeDisplayProps) {
  return (
    <div className="animate-slide-in-right flex min-h-[600px] flex-col items-center justify-center rounded-2xl border border-gray-800/50 bg-gray-900/50 p-8 shadow-2xl backdrop-blur-xl">
      {isLoading ? (
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 animate-pulse rounded-full bg-cyan-500/20 blur-2xl"></div>
            <Loader2 className="relative h-16 w-16 animate-spin text-cyan-400" />
          </div>
          <p className="animate-pulse text-lg text-gray-400">
            Generating your QR code...
          </p>
        </div>
      ) : showResult && qrBlob ? (
        <div className="animate-fade-in flex w-full flex-col items-center gap-6">
          <div className="group relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl transition-all duration-300 group-hover:blur-2xl"></div>
            <div className="relative rounded-2xl shadow-2xl">
              <img
                src={qrCodeUrl}
                alt="Generated QR Code"
                className="h-auto w-full max-w-sm rounded-lg"
              />
            </div>
          </div>

          <div className="grid w-full grid-cols-2 gap-4">
            <button
              onClick={onDownload}
              className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-4 font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-[1.02] hover:from-emerald-600 hover:to-teal-600 hover:shadow-emerald-500/40 active:scale-[0.98]"
            >
              <Download className="h-5 w-5" />
              Download
            </button>

            <button
              onClick={onShare}
              className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 py-4 font-semibold text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:scale-[1.02] hover:from-violet-600 hover:to-fuchsia-600 hover:shadow-violet-500/40 active:scale-[0.98]"
            >
              <Copy className="h-5 w-5" />
              Copy
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex h-32 w-32 items-center justify-center rounded-2xl border-2 border-dashed border-gray-700">
            <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-gray-800/50">
              <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="h-2 w-2 rounded-sm bg-gray-700"
                    style={{
                      animation: `pulse 2s ease-in-out infinite`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <p className="mb-2 text-lg text-gray-400">
              Your QR code will appear here
            </p>
            <p className="text-sm text-gray-600">
              Fill in the form and click Generate
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

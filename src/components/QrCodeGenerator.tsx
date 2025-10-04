import { useState } from "react";
import { Loader2, RotateCcw } from "lucide-react";
import { FormInput } from "./FormInput";
import { QrCodeDisplay } from "./QrCodeDisplay";
import { Logo } from "./Logo";
import type { QrFormData } from "@/lib/types";
import { fonts, initialFormData, regex } from "@/lib/constant";
import { generateQR } from "@/lib/api";
import { useToast } from "./ui/toast";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function QrCodeGenerator() {
  const toast = useToast();
  const [formData, setFormData] = useState<QrFormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [qrBlob, setQrBlob] = useState<Blob | null>(null);

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.text.trim()) {
      toast.error("Please enter text for the QR code.");
      return;
    }
    if (formData?.imageUrl != "") {
      if (!regex.test(formData.imageUrl)) {
        toast.error("Invalid image URL");
        return;
      }
    }

    try {
      setIsLoading(true);
      setShowResult(false);

      const blob = await generateQR(formData);
      console.log("blob", blob);

      if (!blob || blob.size < 100) {
        throw new Error("Invalid QR image received.");
      }

      setQrBlob(blob);

      const url = URL.createObjectURL(blob);
      console.log("URL", url);
      setQrCodeUrl(url);

      setShowResult(true);
    } catch (error: any) {
      console.error("QR Generation Error:", error.message || error);
      toast.error("Something went wrong while generating the QR code.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setQrCodeUrl("");
    setShowResult(false);
  };

  const handleDownload = () => {
    try {
      if (!qrBlob) {
        toast.error("No QR Code to download.");
        return;
      }

      const url = window.URL.createObjectURL(qrBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `QRCode.${formData.format || "png"}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      toast.error("Error in Downloading the QR Code");
      console.error("Download error:", error);
    }
  };

  const handleShare = async () => {
    try {
      if (!qrBlob) {
        toast.error("No QR Code to share.");
        return;
      }
      const clipboardItem = new ClipboardItem({
        [formData.format === "svg" ? "image/svg+xml" : "image/png"]: qrBlob,
      });
      await navigator.clipboard.write([clipboardItem]);
      toast.success("QR Code image copied to clipboard!");
    } catch (error) {
      console.error("Error copying image to clipboard:", error);
      toast.error("Error copying image to clipboard. Please try again.");
    }
  };

  return (
    <div className="relative z-10 flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-6xl">
        <div className="animate-fade-in mb-8 text-center">
          <div className="mb-4 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl"></div>
              <Logo className="relative h-20 w-20" />
            </div>
          </div>
          <h1 className="mb-3 text-5xl font-bold tracking-tight text-white">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              Qido
            </span>
          </h1>
          <p className="text-lg text-gray-400">
            Craft stunning QR codes with precision and style
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="animate-slide-in-left rounded-2xl border border-gray-800/50 bg-gray-900/50 p-8 shadow-2xl backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <FormInput
                label="Text / URL"
                name="text"
                value={formData.text}
                onChange={handleInputChange}
                placeholder="Enter text or URL"
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="font-medium text-gray-300">Format</div>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("format", value)
                    }
                    defaultValue={formData.format}
                  >
                    <SelectTrigger className="h-12 w-full cursor-pointer rounded-xl border border-gray-700 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-500 transition-all duration-300 hover:border-cyan-500/50 focus:border-cyan-500/50 focus:outline-none focus-visible:border-cyan-500/50 active:border-cyan-500/50">
                      <SelectValue placeholder="Image Ratio (Optional)" />
                    </SelectTrigger>
                    <SelectContent className="w-full border-none bg-gray-800 text-white">
                      <SelectGroup className="bg-gray-800 text-white">
                        <SelectItem
                          className="bg-gray-800 text-white hover:bg-blue-500 focus:bg-blue-500 focus:text-white"
                          value="png"
                        >
                          PNG
                        </SelectItem>
                        {/* <SelectItem
                          className="bg-gray-800 text-white hover:bg-blue-500 focus:bg-blue-500 focus:text-white"
                          value="svg"
                        >
                          SVG
                        </SelectItem>
                        <SelectItem
                          className="bg-gray-800 text-white hover:bg-blue-500 focus:bg-blue-500 focus:text-white"
                          value="base64"
                        >
                          base64
                        </SelectItem> */}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <FormInput
                  label="Size (px)"
                  name="size"
                  type="number"
                  value={formData.size}
                  onChange={handleInputChange}
                  placeholder="150"
                  min="100"
                  max="1000"
                />
              </div>

              <FormInput
                label="Margin"
                name="margin"
                type="number"
                value={formData.imageUrl ? "4" : formData.margin}
                onChange={handleInputChange}
                placeholder="4"
                min={formData.caption ? "4" : "0"}
                max="940"
                disabled={formData.imageUrl ? true : false}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormInput
                  label="Background Color"
                  name="bgColor"
                  type="color"
                  value={formData.bgColor}
                  onChange={handleInputChange}
                />

                <FormInput
                  label="QR Code Color"
                  name="qrColor"
                  type="color"
                  value={formData.qrColor}
                  onChange={handleInputChange}
                />
              </div>

              <FormInput
                label="Image URL (Optional)"
                name="imageUrl"
                value={formData.caption ? "" : formData.imageUrl}
                onChange={handleInputChange}
                placeholder="https://example.com/logo.png"
                disabled={formData.caption ? true : false}
              />

              {formData.imageUrl != "" && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <FormInput
                      label="Center Image Width"
                      name="centerImageWidth"
                      value={formData.centerImageWidth}
                      onChange={handleInputChange}
                      placeholder="Width in px"
                      min="0"
                      max={formData.size}
                    />
                    <FormInput
                      label="Center Image Height"
                      name="centerImageHeight"
                      value={formData.centerImageHeight}
                      onChange={handleInputChange}
                      placeholder="Height in px"
                      min="0"
                      max={formData.size}
                    />
                  </div>
                </>
              )}

              <FormInput
                label="Caption (Optional)"
                name="caption"
                value={formData.imageUrl ? "" : formData.caption}
                onChange={handleInputChange}
                placeholder="Add a caption"
                disabled={formData.imageUrl ? true : false}
              />

              {formData.caption != "" && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="font-medium text-gray-300">
                        Font Family
                      </div>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("fontFamily", value)
                        }
                        defaultValue={formData.fontFamily}
                      >
                        <SelectTrigger className="h-12 w-full cursor-pointer rounded-xl border border-gray-700 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-500 transition-all duration-300 hover:border-cyan-500/50 focus:border-cyan-500/50 focus:outline-none focus-visible:border-cyan-500/50 active:border-cyan-500/50">
                          <SelectValue placeholder="Image Ratio (Optional)" />
                        </SelectTrigger>
                        <SelectContent className="w-full border-none bg-gray-800 text-white">
                          <SelectGroup className="bg-gray-800 text-white">
                            {fonts.map((font, index) => (
                              <SelectItem
                                key={index}
                                className="bg-gray-800 text-white hover:bg-blue-500 focus:bg-blue-500 focus:text-white"
                                value={font.font_family}
                              >
                                {font.font_family}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <FormInput
                      label="Font Size"
                      name="fontSize"
                      value={formData.fontSize}
                      onChange={handleInputChange}
                      placeholder="10"
                    />
                  </div>
                </>
              )}

              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <button
                  type="submit"
                  disabled={isLoading || !formData.text.trim()}
                  className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 py-4 font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] hover:from-cyan-600 hover:to-blue-600 hover:shadow-cyan-500/40 active:scale-[0.98] disabled:cursor-not-allowed disabled:from-gray-600 disabled:to-gray-700 disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Logo className="h-5 w-5" />
                      Generate QR Code
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center justify-center gap-2 rounded-xl border border-gray-700 bg-gray-800 px-6 py-4 font-semibold text-gray-300 transition-all duration-300 hover:scale-[1.02] hover:border-gray-600 hover:bg-gray-700 active:scale-[0.98]"
                >
                  <RotateCcw className="h-5 w-5" />
                  Reset
                </button>
              </div>
            </form>
          </div>

          <QrCodeDisplay
            qrCodeUrl={qrCodeUrl}
            isLoading={isLoading}
            showResult={showResult}
            onDownload={handleDownload}
            onShare={handleShare}
            qrBlob={qrBlob}
          />
        </div>
      </div>
    </div>
  );
}

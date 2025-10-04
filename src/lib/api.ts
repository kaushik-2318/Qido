import axios from "axios";
import type { QrFormData } from "./types";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const URL = `${BASE_URL}/qr`;

export const generateQR = async (
  formData: QrFormData,
): Promise<Blob | null> => {
  try {
    const params: Record<string, string | number> = {
      text: formData.text,
      dark: formData.qrColor,
      light: formData.bgColor,
      ecLevel: "Q",
      format: formData.format || "png",
      size: formData.size,
      margin: formData.margin,
    };

    if (formData.caption) params.caption = formData.caption;
    if (formData.fontFamily) params.captionFontFamily = formData.fontFamily;
    if (formData.fontSize) params.captionFontSize = formData.fontSize;
    if (formData.imageUrl) params.centerImageUrl = formData.imageUrl;
    if (formData.centerImageHeight)
      params.centerImageHeight = formData.centerImageHeight;
    if (formData.centerImageWidth)
      params.centerImageWidth = formData.centerImageWidth;

    const response = await axios.get(URL, {
      params,
      responseType: "arraybuffer",
    });

    return new Blob([response.data], {
      type: `image/${formData.format || "png"}`,
    });
  } catch (error: any) {
    console.error("QR Generation Error:", error.message || error);
    return null;
  }
};

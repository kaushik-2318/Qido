export interface QrFormData {
  text: string;
  format: "svg" | "png";
  size: string;
  margin: string;
  bgColor: string;
  qrColor: string;
  imageUrl: string;
  caption: string;
  imageRatio: string;
  centerImageWidth: string;
  centerImageHeight: string;
  fontFamily: string;
  fontSize: string;
}

export interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (name: string, value: string) => void;
  placeholder?: string;
  required?: boolean;
  min?: string;
  max?: string;
  disabled?: boolean;
}

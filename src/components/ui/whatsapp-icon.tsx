import Image from "next/image";

export function WhatsAppIcon({
  className = "w-5 h-5",
  size = 24,
  "aria-hidden": ariaHidden,
}: {
  className?: string;
  size?: number;
  "aria-hidden"?: boolean | "true" | "false";
}) {
  return (
    <Image
      src="/whatsapp.png"
      alt="WhatsApp"
      width={size}
      height={size}
      aria-hidden={ariaHidden}
      className={`inline-block object-contain shrink-0 ${className}`}
    />
  );
}

export default WhatsAppIcon;

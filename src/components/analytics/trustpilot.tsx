import Script from "next/script";

declare global {
  interface Window {
    TrustpilotObject?: string;
    tp?: {
      (...args: unknown[]): void;
      q?: unknown[];
    };
  }
}

interface TrustpilotProps {
  businessUnitId?: string;
}

const DEFAULT_BUSINESS_UNIT_ID = "ZfMtKoiZQ3Zi4yYF";

export function Trustpilot({
  businessUnitId = process.env.NEXT_PUBLIC_TRUSTPILOT_KEY || DEFAULT_BUSINESS_UNIT_ID,
}: TrustpilotProps) {
  if (!businessUnitId) return null;

  return (
    <Script
      id="trustpilot-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,r,n){w.TrustpilotObject=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)};a=d.createElement(s);a.async=1;a.src=r;a.type='text/java'+s;f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(a,f)})(window,document,'script','https://invitejs.trustpilot.com/tp.min.js','tp');tp('register','${businessUnitId}');`,
      }}
    />
  );
}

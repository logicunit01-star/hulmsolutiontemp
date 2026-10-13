export interface CountryCode {
  iso: string;
  name: string;
  dial_code: string;
  flag: string;
  placeholder: string;
}

export const COUNTRY_CODES: CountryCode[] = [
  { iso: "PK", name: "Pakistan", dial_code: "+92", flag: "🇵🇰", placeholder: "300 1234567" },
  { iso: "SA", name: "Saudi Arabia", dial_code: "+966", flag: "🇸🇦", placeholder: "50 123 4567" },
  { iso: "AE", name: "United Arab Emirates", dial_code: "+971", flag: "🇦🇪", placeholder: "50 123 4567" },
  { iso: "QA", name: "Qatar", dial_code: "+974", flag: "🇶🇦", placeholder: "3312 3456" },
  { iso: "OM", name: "Oman", dial_code: "+968", flag: "🇴🇲", placeholder: "9123 4567" },
  { iso: "KW", name: "Kuwait", dial_code: "+965", flag: "🇰🇼", placeholder: "5123 4567" },
  { iso: "BH", name: "Bahrain", dial_code: "+973", flag: "🇧🇭", placeholder: "3612 3456" },
  { iso: "GB", name: "United Kingdom", dial_code: "+44", flag: "🇬🇧", placeholder: "7911 123456" },
  { iso: "US", name: "United States", dial_code: "+1", flag: "🇺🇸", placeholder: "(555) 000-0000" },
  { iso: "CA", name: "Canada", dial_code: "+1", flag: "🇨🇦", placeholder: "(555) 000-0000" },
  { iso: "AU", name: "Australia", dial_code: "+61", flag: "🇦🇺", placeholder: "412 345 678" },
  { iso: "DE", name: "Germany", dial_code: "+49", flag: "🇩🇪", placeholder: "151 2345678" },
  { iso: "FR", name: "France", dial_code: "+33", flag: "🇫🇷", placeholder: "6 12 34 56 78" },
  { iso: "TR", name: "Turkey", dial_code: "+90", flag: "🇹🇷", placeholder: "501 234 5678" },
  { iso: "MY", name: "Malaysia", dial_code: "+60", flag: "🇲🇾", placeholder: "12 345 6789" },
  { iso: "SG", name: "Singapore", dial_code: "+65", flag: "🇸🇬", placeholder: "8123 4567" },
  { iso: "IN", name: "India", dial_code: "+91", flag: "🇮🇳", placeholder: "98765 43210" },
  { iso: "BD", name: "Bangladesh", dial_code: "+880", flag: "🇧🇩", placeholder: "1712 345678" },
  { iso: "EG", name: "Egypt", dial_code: "+20", flag: "🇪🇬", placeholder: "10 1234 5678" },
  { iso: "ZA", name: "South Africa", dial_code: "+27", flag: "🇿🇦", placeholder: "71 234 5678" },
  { iso: "CN", name: "China", dial_code: "+86", flag: "🇨🇳", placeholder: "138 0013 8000" },
  { iso: "JP", name: "Japan", dial_code: "+81", flag: "🇯🇵", placeholder: "90 1234 5678" },
  { iso: "ID", name: "Indonesia", dial_code: "+62", flag: "🇮🇩", placeholder: "812 3456 7890" },
  { iso: "JO", name: "Jordan", dial_code: "+962", flag: "🇯🇴", placeholder: "7 9012 3456" },
  { iso: "LB", name: "Lebanon", dial_code: "+961", flag: "🇱🇧", placeholder: "70 123 456" },
  { iso: "IQ", name: "Iraq", dial_code: "+964", flag: "🇮🇶", placeholder: "770 123 4567" },
  { iso: "YE", name: "Yemen", dial_code: "+967", flag: "🇾🇪", placeholder: "71 234 567" },
  { iso: "NL", name: "Netherlands", dial_code: "+31", flag: "🇳🇱", placeholder: "6 12345678" },
  { iso: "IE", name: "Ireland", dial_code: "+353", flag: "🇮🇪", placeholder: "85 123 4567" },
  { iso: "NZ", name: "New Zealand", dial_code: "+64", flag: "🇳🇿", placeholder: "21 123 4567" },
  { iso: "ES", name: "Spain", dial_code: "+34", flag: "🇪🇸", placeholder: "612 34 56 78" },
  { iso: "IT", name: "Italy", dial_code: "+39", flag: "🇮🇹", placeholder: "312 345 6789" },
  { iso: "BR", name: "Brazil", dial_code: "+55", flag: "🇧🇷", placeholder: "11 91234 5678" },
  { iso: "NG", name: "Nigeria", dial_code: "+234", flag: "🇳🇬", placeholder: "802 123 4567" },
  { iso: "KE", name: "Kenya", dial_code: "+254", flag: "🇰🇪", placeholder: "712 345678" },
  { iso: "PH", name: "Philippines", dial_code: "+63", flag: "🇵🇭", placeholder: "917 123 4567" },
  { iso: "LK", name: "Sri Lanka", dial_code: "+94", flag: "🇱🇰", placeholder: "71 234 5678" },
  { iso: "CH", name: "Switzerland", dial_code: "+41", flag: "🇨🇭", placeholder: "78 123 45 67" },
  { iso: "SE", name: "Sweden", dial_code: "+46", flag: "🇸🇪", placeholder: "70 123 45 67" },
  { iso: "NO", name: "Norway", dial_code: "+47", flag: "🇳🇴", placeholder: "412 34 567" },
];

export const DEFAULT_COUNTRY = COUNTRY_CODES[0];

export function formatPhoneWithCountryCode(rawPhone: string, dialCode: string): string {
  const trimmed = rawPhone.trim();
  if (!trimmed) return "";

  if (trimmed.startsWith("+")) {
    return trimmed;
  }

  // Remove leading zeros (e.g. 0300 -> 300)
  const withoutLeadingZero = trimmed.replace(/^0+/, "");

  // If user entered dialCode digits without '+'
  const dialDigits = dialCode.replace(/\D/g, "");
  if (withoutLeadingZero.startsWith(dialDigits) && withoutLeadingZero.length > dialDigits.length + 5) {
    return `+${withoutLeadingZero}`;
  }

  return `${dialCode} ${withoutLeadingZero}`;
}

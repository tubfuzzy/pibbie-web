import { useRouter } from "next/router";
import en from "../locales/en";
import th from "../locales/th";

export const useLanguage = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : th;
  return { t, locale };
};

export const dictionaries = {
  en: () => import("@/locales/en.json").then((module) => module.default),
  fr: () => import("@/locales/fr.json").then((module) => module.default),
};

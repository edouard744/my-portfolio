import { dictionaries } from "./dictionaries";

export const getDictionary = async (locale: "en" | "fr") => {
  return dictionaries[locale]();
};

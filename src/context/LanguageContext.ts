import { createContext } from "react";

export interface LanguageContextType {
  language: 'uk' | 'sk';
  setLanguage: (lang: 'uk' | 'sk') => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

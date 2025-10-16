import type { SiteConfig } from "@/types";
import type { AstroExpressiveCodeOptions } from "astro-expressive-code";

export const siteConfig: SiteConfig = {
  // Site identity & meta
  author: "Kasturi Kandalam",
  title: "Kasturi Kandalam",
  description: "econ | data | development | side quests",

  // HTML lang & Open Graph locale
  lang: "en-GB",
  ogLocale: "en_GB",

  // Date formatting used across the site
  date: {
    locale: "en-IN",
    options: { day: "numeric", month: "short", year: "numeric" },
  },

  // Domain used by theme features / manifest
  url: "https://kkandalam12.vercel.app/",
};

// Header & Footer links
export const menuLinks: { path: string; title: string }[] = [
  { path: "/", title: "Home" },
  { path: "/papers/", title: "Papers" }, // create src/pages/papers.astro
  { path: "/public/cv/Kasturi_Kandalam_CV.pdf", title: "CV" }, // put file in public/cv/
];

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
  styleOverrides: {
    borderRadius: "4px",
    codeFontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    codeFontSize: "0.875rem",
    codeLineHeight: "1.7142857rem",
    codePaddingInline: "1rem",
    frames: { frameBoxShadowCssValue: "none" },
    uiLineHeight: "inherit",
  },
  themeCssSelector(theme, { styleVariants }) {
    // Support dark/light switch safely (baseTheme may be undefined)
    if (styleVariants.length >= 2) {
      const baseTheme = styleVariants[0]?.theme;
      const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
      if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
    }
    return `[data-theme="${theme.name}"]`;
  },
  // One dark + one light theme
  themes: ["dracula", "github-light"],
  useThemedScrollbars: false,
};

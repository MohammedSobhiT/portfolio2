import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['"Satoshi"', "sans-serif"],
        bitterslide: ['"Bitterslide Evelwhite"', "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

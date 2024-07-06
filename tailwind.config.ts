import type { Config } from "tailwindcss"
import { nextui } from "@nextui-org/theme";
const config = {
  
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
  prefix: "",
  theme: {
    
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.06em", // -2% aproximadamente
        tightest: "-0.03em", // -1% aproximadamente
        espaciado: "+0.04em", // 2% aproximadamente
        espaciadomas: "+0.08em", // 4% aproximadamente
      },

      colors: {
        'blue-light': '#052845', // blue-50
        'yellow-light': '#FFD527', // yellow-50
        'background-light': '#ffffff', // white (native)

        // Modo oscuro
        'blue-dark': '#1c537d', // blue-25
        'yellow-dark': '#FFC107', // yellow-25
        'background-dark': '#23272A', // black-50
        'off-white': '#f5f5f5',
        'background-darker': '#18181B', // black-50
        
        "custom-white":"#f2f2f2",
        "custom-blue": "#006692",
        "custom-yellow": "#ffe17e",
        "custom-orange": "#F5A67E",
        "custom-gray": "#8992a6",
        "custom-background": "#23272A",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },  
  darkMode: "class",
  plugins: [require("tailwindcss-animate"),nextui()],
} satisfies Config

export default config
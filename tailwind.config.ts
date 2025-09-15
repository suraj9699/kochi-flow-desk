import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      colors: {
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
        // KMRL Professional Colors
        "primary-blue": "hsl(var(--primary-blue))",
        "teal-accent": "hsl(var(--teal-accent))",
        "neutral-grey": "hsl(var(--neutral-grey))",
        "pure-white": "hsl(var(--pure-white))",
        "success-green": "hsl(var(--success-green))",
        "warning-orange": "hsl(var(--warning-orange))",
        "metro-dark": "hsl(var(--metro-dark))",
        "metro-light": "hsl(var(--metro-light))",
        "surface-grey": "hsl(var(--surface-grey))",
        "text-dark": "hsl(var(--text-dark))",
        "text-muted": "hsl(var(--text-muted))",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        manjari: ['Manjari', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "bounce-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)"
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)"
          }
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "1"
          },
          "50%": {
            opacity: "0.7"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-up": "slide-up 0.3s ease-out",
        "bounce-in": "bounce-in 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      boxShadow: {
        'card': 'var(--shadow-card)',
        'elevated': 'var(--shadow-elevated)',
        'floating': 'var(--shadow-floating)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

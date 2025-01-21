module.exports = {
  // Note: config only includes the used styles & variables of your selection
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./Pages/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        "title-font-family": "Oswald-Bold, sans-serif",
        "subtitle-font-family": "Oswald-Regular, sans-serif",
        "link-nav-default-font-family": "NotoSans-Regular, sans-serif",
        "button-label-font-family": "NotoSans-Regular, sans-serif",
        "header-font-family": "Oswald-Bold, sans-serif",
        "subheader-font-family": "Oswald-Regular, sans-serif",
        "body-font-family": "NotoSans-Regular, sans-serif",
        "footer-header-font-family": "NotoSans-Regular, sans-serif",
        "font-family-headers": "Oswald-Bold, sans-serif",
        "font-family-subheading": "-, sans-serif",
        "font-family-body": "NotoSans-Regular, sans-serif",
      },
      fontSize: {
        "title-font-size": "48px",
        "subtitle-font-size": "36px",
        "link-nav-default-font-size": "16px",
        "button-label-font-size": "16px",
        "header-font-size": "28px",
        "subheader-font-size": "24px",
        "body-font-size": "16px",
        "footer-header-font-size": "24px",
        "font-size-3xl": "48px",
        "font-size-2xl": "36px",
        "font-size-med-base": "16px",
        "font-size-xl": "28px",
        "font-size-lg": "24px",
      },
      fontWeight: {
        "title-font-weight": "700",
        "subtitle-font-weight": "400",
        "link-nav-default-font-weight": "400",
        "button-label-font-weight": "400",
        "header-font-weight": "700",
        "subheader-font-weight": "400",
        "body-font-weight": "400",
        "footer-header-font-weight": "400",
      },
      lineHeight: {
        "title-line-height": "normal",
        "subtitle-line-height": "normal",
        "link-nav-default-line-height": "16px",
        "button-label-line-height": "normal",
        "header-line-height": "normal",
        "subheader-line-height": "normal",
        "body-line-height": "normal",
        "footer-header-line-height": "normal",
        "font-size-med-base": "16px",
      },
      letterSpacing: {
        "font-kerning-normal": "",
      },
      borderRadius: {},
      colors: {
        "footer-top-border": "#ccd2d3",
        "color-palette-primary-white": "#fcffff",
        "header-and-footer-nav-bar-background-fill": "#fcffff",
        "color-palette-brand-gold-pe-gold-5": "#fcf0db",
        "color-palette-primary-black": "#0e2225",
        "color-palette-brand-green-pe-green-4": "#c7d7ca",
        "color-palette-brand-green-pe-green-5": "#e7f0e7",
        "legislative-blue-5": "#edf2f8",
        "campaign-brown-5": "#e4d7d5",
        "campaign-brown": "#79443b",
        "header-and-footer-footer-background-fill": "#fcffff",
        "color-palette-secondary-pe-grey-4": "#ccd2d3",
        "header-and-footer-nav-bar-menu-links-default": "#316da5",
        "pe-gold-2": "#f3c271",
        "pe-gold": "#f0b34d",
        "open-source-green": "#aec0b2",
        "pe-gold-4": "#f9e1b8",
        "pe-gold-3": "#f6d194",
        "bg-pe-gold-5": "#fcf0db",
        "legislative-blue": "#588bbb",
        "header-and-footer-footer-header": "#0e2225",
        "header-and-footer-footer-body": "#0e2225",
        "color-palette-secondary-pe-grey-1": "#56696d",
        "color-palette-secondary-pe-grey-2": "#859396",
        "color-palette-seczondary-pe-grey-3": "#abb4b6",
      },
      spacing: {
        "desktop-gutter-base": "24px",
        "desktop-margin-base": "32px",
        "spacing-base-8-8": "64px",
        "spacing-base-8-6": "48px",
        "spacing-base-8-1": "8px",
        "spacing-base-8-2": "16px",
        "desktop-margin-max": "32px",
        "spacing-base-8-4": "32px",
        "spacing-base-8-25": "20px",
        "spacing-base-8-05": "4px",
      },
      width: {
        "desktop-breakpoint-base": "1280px",
        "desktop-column-width-base-col-03": "287px",
        "desktop-column-width-base-col-10": "1011px",
        "desktop-column-width-base-col-02": "183px",
        "spacing-base-8-2": "16px",
        "desktop-breakpoint-max": "2000px",
        "desktop-column-width-max-col-05": "793px",
      },
      minWidth: {},
      maxWidth: {},
      height: {
        "spacing-base-8-10": "80px",
        "spacing-base-8-4": "32px",
        "spacing-base-8-6": "48px",
        "spacing-base-8-2": "16px",
        "spacing-base-8-8": "64px",
        "desktop-column-width-base-col-03": "287px",
        "spacing-base-8-1": "8px",
      },
      minHeight: {},
      maxHeight: {},
      keyframes: {
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
    'text-slide-2': 'text-slide-2 5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
    'text-slide-3': 'text-slide-3 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
    'text-slide-4': 'text-slide-4 10s cubic-bezier(0.83, 0, 0.17, 1) infinite',
    'text-slide-5': 'text-slide-5 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
    'text-slide-6': 'text-slide-6 15s cubic-bezier(0.83, 0, 0.17, 1) infinite',
    'text-slide-7': 'text-slide-7 17.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
    'text-slide-8': 'text-slide-8 20s cubic-bezier(0.83, 0, 0.17, 1) infinite',
},
keyframes: {
    'text-slide-2': {
        '0%, 40%': {
            transform: 'translateY(0%)',
        },
        '50%, 90%': {
            transform: 'translateY(-33.33%)',
        },
        '100%': {
            transform: 'translateY(-66.66%)',
        },
    },
    'text-slide-3': {
        '0%, 26.66%': {
            transform: 'translateY(0%)',
        },
        '33.33%, 60%': {
            transform: 'translateY(-25%)',
        },
        '66.66%, 93.33%': {
            transform: 'translateY(-50%)',
        },
        '100%': {
            transform: 'translateY(-75%)',
        },
    },
    'text-slide-4': {
        '0%, 20%': {
            transform: 'translateY(0%)',
        },
        '25%, 45%': {
            transform: 'translateY(-20%)',
        },
        '50%, 70%': {
            transform: 'translateY(-40%)',
        },
        '75%, 95%': {
            transform: 'translateY(-60%)',
        },                            
        '100%': {
            transform: 'translateY(-80%)',
        },
    },
    'text-slide-5': {
        '0%, 16%': {
            transform: 'translateY(0%)',
        },
        '20%, 36%': {
            transform: 'translateY(-16.66%)',
        },
        '40%, 56%': {
            transform: 'translateY(-33.33%)',
        },
        '60%, 76%': {
            transform: 'translateY(-50%)',
        },
        '80%, 96%': {
            transform: 'translateY(-66.66%)',
        },
        '100%': {
            transform: 'translateY(-83.33%)',
        },
    },
    'text-slide-6': {
        '0%, 13.33%': {
            transform: 'translateY(0%)',
        },
        '16.66%, 30%': {
            transform: 'translateY(-14.28%)',
        },
        '33.33%, 46.66%': {
            transform: 'translateY(-28.57%)',
        },
        '50%, 63.33%': {
            transform: 'translateY(-42.85%)',
        },
        '66.66%, 80%': {
            transform: 'translateY(-57.14%)',
        },
        '83.33%, 96.66%': {
            transform: 'translateY(-71.42%)',
        },
        '100%': {
            transform: 'translateY(-85.71%)',
        },
    },
    'text-slide-7': {
        '0%, 11.43%': {
            transform: 'translateY(0%)',
        },
        '14.28%, 25.71%': {
            transform: 'translateY(-12.5%)',
        },
        '28.57%, 40%': {
            transform: 'translateY(-25%)',
        },
        '42.85%, 54.28%': {
            transform: 'translateY(-37.5%)',
        },
        '57.14%, 68.57%': {
            transform: 'translateY(-50%)',
        },
        '71.42%, 82.85%': {
            transform: 'translateY(-62.5%)',
        },
        '85.71%, 97.14%': {
            transform: 'translateY(-75%)',
        },
        '100%': {
            transform: 'translateY(-87.5%)',
        },
    },
    'text-slide-8': {
        '0%, 10%': {
            transform: 'translateY(0%)',
        },
        '12.5%, 22.5%': {
            transform: 'translateY(-11.11%)',
        },
        '25%, 35%': {
            transform: 'translateY(-22.22%)',
        },
        '37.5%, 47.5%': {
            transform: 'translateY(-33.33%)',
        },
        '50%, 60%': {
            transform: 'translateY(-44.44%)',
        },
        '62.5%, 72.5%': {
            transform: 'translateY(-55.55%)',
        },
        '75%, 85%': {
            transform: 'translateY(-66.66%)',
        },
        '87.5%, 97.5%': {
            transform: 'translateY(-77.77%)',
        },
        '100%': {
            transform: 'translateY(-88.88%)',
        },
    }
},
    },
  },
};

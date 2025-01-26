/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        nunito: ['var(--font-nunito)', 'sans-serif'],
      },
    screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
		  },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      variants: {
        extend: {
          scale: ['hover'],
          boxShadow: ['hover'],
        },
      },
      colors: {
        orange: {
          main: '#f36022',
          light: '#FFB700',
          tomato: '#8f3e1c',
          yellow: '#eab308',
        },
      },
      backgroundImage: {
        'bg-orange': 'linear-gradient(45deg, #f04c23, #f04c23, #f04c23, #f99f1c)',
        'gradient-orange': 'linear-gradient(45deg, #f04c23, #f99f1c)',
        'gradient-white': 'linear-gradient(0deg, #FFF3E2, #FFFFE2, #FFFFFF)',
        'gradient-tomato': 'linear-gradient(180deg, #FFFFFF, #ffd78a, #f99f1c, #f4762d, #f4762d, #FFF3E2, #FFFFE2)',
        'gradient-pink': 'linear-gradient(45deg, #f74985, #46295c, #5355fb)',
        'artistic-home': "url('/src/assets/background.svg')",
      },
      backgroundColor: {
        'gradient-orange': 'linear-gradient(45deg, #f36022, #f99f1c)',
        'gradient-white': 'linear-gradient(45deg, #FFF3E2, #FFFFE2, #FFFFFF)',
        'gradient-tomato': 'linear-gradient(45deg, #ffd78a, #f4762d)',
        'gradient-pink': 'linear-gradient(45deg, #f74985, #46295c, #5355fb)',
        'artistic-home': "url('/src/assets/background.svg')",
      },
      borderColor: {
        'gradient-orange': 'linear-gradient(45deg, #f04c23, #f99f1c)',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px' }],
        sm: ['14px', { lineHeight: '20px' }],
        md: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '28px' }],
        xl: ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '40px' }],
      },
      spacing: {
        0: '0px',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        8: '32px',
        10: '40px',
        12: '48px',
        16: '64px',
        20: '80px',
        24: '96px',
      },
      borderRadius: {
        none: '0',
        sm: '2px',
        DEFAULT: '16px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
        full: '9999px',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      dropShadow: {
        sm: '12px',
        md: '4px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
      },
    },
  },
  // Define custom plugins for Tailwind CSS
  plugins: [
    require("tailwindcss-animate"),
    // Custom plugin function to add new utility classes
    function ({ addUtilities }) {
      // Define new utility classes
      const newUtilities = {
        '.text-title-orange': {
          fontSize: '22px',
          lineHeight: '1.5', // 1 =  lineHeight to fontSize ratio (40px)
          fontWeight: '900',
          backgroundClip: 'text',
          backgroundImage: 'linear-gradient(45deg, #f04c23, #f99f1c)',
          textAlign: 'center',
          color: 'transparent',
        },
        '.text-title-card': {
          fontSize: '18px',
          lineHeight: '1', // 1 =  lineHeight to fontSize ratio (40px)
          fontWeight: '700',
          textAlign: 'left',
          color: 'black',
        },
        '.text-description-card': {
          // fontSize: '12px',
          // fontWeight: '300',
          // fontFamily: 'Poppins, sans-serif',
          textAlign: 'left',
          color: '#5f6368',
        },
        '.text-big-percent-number': {
          fontSize: '28px',
          lineHeight: '1', // 1 =  lineHeight to fontSize ratio (40px)
          fontWeight: '900',
          textAlign: 'center',
          color: 'black',
        },
        '.text-action-buttons': {
          fontSize: '18px',
          lineHeight: '1', // 1 =  lineHeight to fontSize ratio (40px)
          fontWeight: '700',
          textAlign: 'left',
          color: 'white',
        },
      };
      
      // Add the new utility classes to Tailwind, making them responsive and hoverable
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ], // Closing the plugins array
  // Add this line to include custom classes
}; // Closing the module.exports object
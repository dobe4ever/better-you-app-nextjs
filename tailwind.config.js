// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     darkMode: ['class'],
//     content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//   	extend: {
// 		screens: {
// 			sm: '640px',
// 			md: '768px',
// 			lg: '1024px',
// 			xl: '1280px',
// 		  },
//   		borderRadius: {
// 			none: '0',
// 			sm: '2px',
// 			DEFAULT: '4px',
// 			md: '6px',
// 			lg: '8px',
// 			xl: '12px',
// 			'2xl': '16px',
// 			full: '9999px',
//   		},
//   		colors: {
//   			background: 'hsl(var(--background))',
//   			foreground: 'hsl(var(--foreground))',
//   			card: {
//   				DEFAULT: 'hsl(var(--card))',
//   				foreground: 'hsl(var(--card-foreground))'
//   			},
//   			popover: {
//   				DEFAULT: 'hsl(var(--popover))',
//   				foreground: 'hsl(var(--popover-foreground))'
//   			},
//   			primary: {
//   				DEFAULT: 'hsl(var(--primary))',
//   				foreground: 'hsl(var(--primary-foreground))'
//   			},
//   			secondary: {
//   				DEFAULT: 'hsl(var(--secondary))',
//   				foreground: 'hsl(var(--secondary-foreground))'
//   			},
//   			muted: {
//   				DEFAULT: 'hsl(var(--muted))',
//   				foreground: 'hsl(var(--muted-foreground))'
//   			},
//   			accent: {
//   				DEFAULT: 'hsl(var(--accent))',
//   				foreground: 'hsl(var(--accent-foreground))'
//   			},
//   			destructive: {
//   				DEFAULT: 'hsl(var(--destructive))',
//   				foreground: 'hsl(var(--destructive-foreground))'
//   			},
//   			border: 'hsl(var(--border))',
//   			input: 'hsl(var(--input))',
//   			ring: 'hsl(var(--ring))',
//   			chart: {
//   				'1': 'hsl(var(--chart-1))',
//   				'2': 'hsl(var(--chart-2))',
//   				'3': 'hsl(var(--chart-3))',
//   				'4': 'hsl(var(--chart-4))',
//   				'5': 'hsl(var(--chart-5))'
//   			}
//   		}
//   	}
//   },
//   plugins: [require("tailwindcss-animate")],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
          main: '#FF5300',
          light: '#FFB700',
          tomato: '#8f3e1c',
          yellow: '#eab308',
        },
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(45deg, #faae7b, #432371)',
        'gradient-orange': 'linear-gradient(45deg, #f9a13d, #ee7539, #e55136)',
        'gradient-white': 'linear-gradient(45deg, #FFF3E2, #FFFFE2, #FFFFFF)',
        'gradient-tomato': 'linear-gradient(45deg, #ffd78a, #f4762d)',
        'gradient-pink': 'linear-gradient(45deg, #f74985, #46295c, #5355fb)',
        'artistic-home': "url('/src/assets/background.svg')",
      },
      borderColor: {
        'border-gradient-orange': 'linear-gradient(45deg, #FF5300, #FFB700)',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '24px' }],
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
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
        full: '9999px',
      },
    },
  },
  // Define custom plugins for Tailwind CSS
  plugins: [
    // Custom plugin function to add new utility classes
    function ({ addUtilities }) {
      // Define new utility classes
      const newUtilities = {
        // Card Title
        '.text-card-title': {
          textAlign: 'left',
          fontSize: '1.2rem',
          lineHeight: '1.2rem',
          fontWeight: '500',
          fontFamily: 'Poppins, sans-serif',
        },
        // Card Description
        '.text-card-description': {
          textAlign: 'left',
          fontSize: '0.8rem',
          fontFamily: 'Poppins, sans-serif',
        },
        // Logo text 'Better You'
        '.text-logo': {
          color: '#FFFFFF',
          textAlign: 'center',
          fontSize: '1.2rem',
          lineWeight: '0.5rem',
          fontWeight: '900',
          fontFamily: 'Poppins, sans-serif',
        },
        // Logo subline 'EVERYDAY'
        '.text-logo-subline': {
          textAlign: 'center',
          fontSize: '0.8rem',
          lineHeight: '1.2rem',
          fontWeight: '200',
          fontFamily: 'Poppins, sans-serif',
          letterSpacing: '0.4em',
        },
        '.text-title-orange': {
          fontSize: '20px',
          lineHeight: '1', // 1 =  lineHeight to fontSize ratio (40px)
          fontWeight: '900',
          fontFamily: 'Nunito, sans-serif',
          backgroundClip: 'text',
          backgroundImage: 'linear-gradient(45deg, #fb9a47, #fa8730 )',
          textAlign: 'center',
          color: 'transparent',
        },
        '.text-title-white': {
          fontSize: '20px',
          lineHeight: '1', // 1 =  lineHeight to fontSize ratio (40px)
          fontWeight: '900',
          fontFamily: 'Nunito, sans-serif',
          //backgroundClip: 'text',
          //backgroundImage: 'linear-gradient(45deg, #FFF3E2, #FFFFE2, #FFFFFF)',
          textAlign: 'center',
          color: 'white',
        },
        '.text-title-yellow': {
          fontSize: '40px',
          lineHeight: '1', // 1 =  lineHeight to fontSize ratio (40px)
          fontWeight: '900',
          fontFamily: 'Nunito, sans-serif',
          backgroundClip: 'text',
          backgroundImage: 'linear-gradient(45deg, #f74985, #973fc0, #46295c)',
          textAlign: 'center',
          color: 'transparent',
        },
        // Custom class for heading style
        '.text-heading': {
          fontSize: '2rem',
          lineHeight: '2.5rem',
          fontWeight: '700',
          fontFamily: 'Nunito, sans-serif',
        },
        // Custom class for subheading style
        '.text-subheading': {
          fontSize: '1rem',
          lineHeight: '2rem',
          fontWeight: '600',
          fontFamily: 'Nunito',
        },
        // Custom class for base text style
        '.text-base': {
          fontSize: '1rem',
          lineHeight: '1.5rem',
          fontWeight: '500',
          fontFamily: 'Nunito, sans-serif',
        },
        // Custom class for decor text style
        '.text-decor': {
          fontSize: '1rem',
          lineHeight: '1.5rem',
          fontWeight: '600',
          fontFamily: 'Poppins, sans-serif',
        },
      };
      
      // Add the new utility classes to Tailwind, making them responsive and hoverable
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    require('tailwind-scrollbar-hide')
  ], // Closing the plugins array
  // Add this line to include custom classes
}; // Closing the module.exports object
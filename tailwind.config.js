/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow:{
        "big-white":"1px 1px 20px 1px white",
        "big-1":"1px 1px 20px 2px #172A3A",
        "big-2":"1px 1px 20px 2px #004346",
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        "big-3":"1px 1px 20px 2px #004346,-1px -1px 20px 2px #004346"
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
        xs:'275px',
        tablet:"640px",
        laptop:"1024px",
        desktop:"1280px"
        
      },
    },
  },
  plugins: [],
}

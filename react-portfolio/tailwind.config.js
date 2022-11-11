/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/daisyui/dist/**/*.js', 'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'onyx': '#393D3F',
        'whitest': '#FDFDFF',
        'silver': '#C6C5B9',
        'steel-teal': '#62929E',
        'dark-electric-blue': '#546A7B',
        'dark-slate-gray': '#384D48',
        'english-violet': '#39304A,',
        'space-cadet': '#283044',
        'lavender-gray': '#BFBCCB',
        'timberwolf': '#D8DAD3',
        'deep-jungle-green': '#004643',
        'ming': '#15616D'
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#15616D",

          "secondary": "#D8D5DB",

          "accent": "#B0D7FF",

          "neutral": "#191D24",

          "base-100": "#2D3142",

          "info": "#3ABFF8",

          "success": "#ADACB5",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
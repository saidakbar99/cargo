/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
        roadRadio: ['RoadRadio', 'sans-serif'],
      },
      colors: {
        gray: {
          DEFAULT: '#898989',
        },
        black: {
          DEFAULT: '#222529',
        },
        orange: {
          DEFAULT: '#FB7C0E',
        },
        lightGray: '#E5E5E5',
        iconBackground: '#FFF0E8',
        grayBorder: 'rgba(34, 37, 41, 0.10)',
        storeLogoBg: 'rgba(34, 37, 41, 0.04)',
        sliderBg: 'rgba(60, 60, 67, 0.18)'
      },
    },
  },
  plugins: [],
}


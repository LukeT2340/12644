export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {},
      colors: {
        'bright-cyan': '#58F6F4',
        'dark-blue': '#192958',
        'light-orange': '#FFB42E',
        'bright-orange': '#FF5629',
        'purple': '#8146C6',
        'sky-blue': '#269AF9',
        'grassy-green': '#BCD64D'
      },
      fontFamily: {
        taiwan: ['TaiwanSans', 'sans-serif'],
      },
      fontSize: {
        clampHeading: 'clamp(48px, 6vw, 92px)',
        clampHeading2: 'clamp(30px, 5vw, 54px)',
        '19': ['19px', '36px'],
        '78': ['78px', '100px'],
        '100': ['100px', '135px'],
      },
      lineHeight: {
        tight: '1.00',
        normal: '1.35',
        custom: '1.5',
      },
      backgroundImage: {
        fixedBg: "url('/src/assets/images/desktop/hero.jpg')",
      },
    },
  },
  plugins: [],
}

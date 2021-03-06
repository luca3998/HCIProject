module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    rotate:{
      '0': '0',
      '90': '90deg',
      '180': '180deg',
      '270': '270deg'
    },
    extend: {
      keyframes: {
          'fade-in-down': {
              '0%': {
                  opacity: '0',
                  transform: 'translateY(-10px)'
              },
              '100%': {
                  opacity: '1',
                  transform: 'translateY(0)'
              },
          }
      },
      animation: {
          'fade-in-down': 'fade-in-down 0.5s ease-out'
      }
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

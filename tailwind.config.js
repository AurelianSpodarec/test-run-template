module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      extend: {
          // fontFamily: {
          //     sans: ['Nunito', ...defaultTheme.fontFamily.sans],
          // },
          maxWidth: {
              '8xl'  : '86rem',
              '9xl'  : '90rem',
              '10xl' : '94rem',
          },
          colors: {
              brand: {
                  '500' : '#db2777'
              }
          },
      },
  },
  plugins: [],
}

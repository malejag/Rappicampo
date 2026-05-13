/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        campo: {
          50: '#f2f8ee',
          100: '#dff0d6',
          200: '#c3e2b1',
          300: '#98cc7a',
          400: '#6fb34d',
          500: '#4d9631',
          600: '#3b7a25',
          700: '#315f22',
          800: '#2b4d22',
          900: '#263f20'
        },
        noche: '#123047',
        maiz: '#f6b94b',
        naranjaSuave: '#f28c4b'
      },
      boxShadow: {
        soft: '0 16px 50px rgba(18, 48, 71, 0.10)'
      }
    }
  },
  plugins: [],
}

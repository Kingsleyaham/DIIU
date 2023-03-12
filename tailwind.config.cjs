/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        contactCard: 'rgba(239, 241, 245, 0.1)',
        contactBorderColor: 'rgba(255, 255, 255, 0.125)',
        contactButtonHover: 'rgb(91, 88, 88)',
        contactButtonDisabledHover: 'rgb(208, 199, 199)',
        contactButtonDisabled: 'rgb(208, 199, 199)'
      },
      boxShadow: {
        contactCard: '0px 8px 16px 0px rgba(0, 0, 0, 0.4)',
        contactButtonActive: 'inset 0px 8px 16px 0px rgba(0, 0, 0, 0.4)'
      },
      backgroundImage: {
        eventsBanner: "url('/images/charles.jpg')"
      }
    }
  },
  plugins: []
}

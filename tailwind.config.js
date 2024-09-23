/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'dosen.html', 'surat.html', 'proposal.html', 'ujian.html', 'chatbot.html', 'ujian kompre.html'],
  theme: {
    container: {
      center: 'true',
      padding: '16px',
    },
    extend: {    
      colors: {
        primary: '#f97316',
        dark: '#475569',
        facebook : '#1d4ed8',
        instagram: '#c026d3',
        Google: '#e11d48',
        Wa: '#82bd69',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}


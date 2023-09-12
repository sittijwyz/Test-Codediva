/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'promote1': "url('https://firebasestorage.googleapis.com/v0/b/swensens-production.appspot.com/o/superdeal%2FAW_SW 9.9 Campaign AUG23_1440x810-01.jpg?alt=media')",
        'promote2': "url('https://firebasestorage.googleapis.com/v0/b/swensens-production.appspot.com/o/superdeal%2FSW Toasty Sundae_KV 1440x810px_0.jpg?alt=media')",
        'download': "url('https://www.swensens1112.com/images/bg-page-bottom.jpg')",
        'page-login': "url('https://www.swensens1112.com/images/card-head.png')"
      },
    },
  },
  plugins: [],
}


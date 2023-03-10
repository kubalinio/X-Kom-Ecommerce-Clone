/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // clipPath:' polygon(35%, 0px, 100% 0px, 100% 100%, 35% 100%)' 
  // clipPath:' polygon(0px, 0px, 100% 0px, 100% 100%, 0px 100%)'
  theme: {
    extend: {
      boxShadow: {
        'sm-xCom': '0 2px 4px 0 rgb(0 0 0 / 8%), 0 0 2px 1px rgb(0 0 0 / 8%)',
        'xCom': '0 4px 8px 0 rgb(0 0 0 / 16%), 0 0 2px 1px rgb(0 0 0 / 8%)'
      },
      keyframes:{
        logoAnimationShow: {
          '0%': {transform: 'translateX(14px) scale(0.8)', clipPath:' polygon(35% 0px, 100% 0px, 100% 100%, 35% 100%)' },
          '100%': {transform: 'translateY(0px) scale(1)', clipPath:' polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)' }
        },
        logoAnimationHide: {
          '0%': {transform: 'translateX(0px) scale(1)', clipPath:' polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)' },
          '100%': {transform: 'translateX(14px) scale(0.8)', clipPath:' polygon(35% 0px, 100% 0px, 100% 100%, 35% 100%)' }
        },
        headerAnimationExpand: {
          '0%': {height: '56px'},
          '100%': {height: '72px'}
        },
        headerAnimationMinimize: {
          '0%': {height: '72px'},
          '100%': {height: '56px'}
        },
      },
      
      animation: {
        logoShow: 'logoAnimationShow 400ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
        logoHide: 'logoAnimationHide 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
        headerExpand: 'headerAnimationExpand 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
        headerMinimize: 'headerAnimationMinimize 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
      }
    },

    screens: {
      'xsm': '460px',
      // => @media (min-width: 460px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1080px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1600px',
      // => @media (min-width: 1536px) { ... }
    },

    fontFamily: {
      lato: ['var(--font-lato)']
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
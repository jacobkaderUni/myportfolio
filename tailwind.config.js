import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';



/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      phone: '390px',
      vPhone: '400px',
      hPhone: '876px',
      tabletv2: '1024px',
      tablet: '1270px',
      desktop: '1440px',
    },
    colors: {
      primary2: {
        primary: 'rgba(17, 17, 17)',
        secondary: 'rgba(102, 102, 102)',
        tertiary: 'rgba(153, 153, 153)',
        accent: 'rgba(161, 88, 48)',
        green: 'rgba(8, 128, 70)',
        greenBg: 'rgba(9, 227, 125, 0.16)',
        backgroundAccent: 'rgba(250, 233, 225)',
        backgroundPlus2: 'rgba(239, 239, 240)',
        backgroundPlus1: 'rgba(255, 255, 255)',
        background: 'rgba(244, 245, 245)',
      
        border: 'rgba(0, 0, 0, 0.08)',
        actionBGNormal: 'rgba(48, 50, 54)',
        actionBGHover: 'rgba(24, 25, 27)',
        actionBGPressed: 'rgba(96, 100, 108)',
        actionStrokeNormal: 'rgba(174, 177, 183, 0.7)',
        actionStrokeHover: 'rgba(147, 151, 159, 0.9)',
        actionStrokePressed: 'rgba(174, 177, 183)',
        ghostBGHover: 'rgba(174, 177, 183, 0.16)',
        ghostBGSelected: 'rgba(174, 177, 183, 0.32)',
        ghostBGPressed: 'rgba(174, 177, 183, 0.5)',
        buttonLabelLight: 'rgba(255, 255, 255)',
        buttonLabelDark: 'rgba(18, 18, 18)',
        buttonLabelInverted: 'rgba(255, 255, 255)',
      }
    },
    fontSize: {
      listItem: ['14px', '1.8rem'],
      heading1: ['40px', {
        lineHeight: '1.5rem',
        letterSpacing: '-0.04em',
        fontWeight: '600',
      }],
      heading2: ['26px', {
        lineHeight: '1.5rem',
        letterSpacing: '-0.02em',
        fontWeight: '500',
      }],
      heading3: ['22px', {
        lineHeight: '1.5rem',
        letterSpacing: '0em',
        fontWeight: '500',
      }],
      heading4: ['20px', {
        lineHeight: '1.5rem',
        letterSpacing: '0em',
        fontWeight: '500',
      }],
       heading5: ['18px', {
        lineHeight: '1.5rem',
        letterSpacing: '0em',
        fontWeight: '500',
      }],
       strong18: ['18px', {
        lineHeight: '1.8rem',
        letterSpacing: '-0.02em',
        fontWeight: '500',
      }],
       strong16: ['16px', {
        lineHeight: '1.5rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
       strong14: ['14px', {
        lineHeight: '1.8rem',
        letterSpacing: '0em',
        fontWeight: '500',
      }],
       regular18: ['18px', {
        lineHeight: '1.8rem',
        letterSpacing: '-0.01em',
        fontWeight: '400',
      }],
       regular16: ['16px', {
        lineHeight: '1.8rem',
        letterSpacing: '0em',
        fontWeight: '400',
      }],
       regular14: ['14px', {
        lineHeight: '1.8rem',
        letterSpacing: '0em',
        fontWeight: '400',
      }],
    },
    boxShadow: {
      custom: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
      custom2: 'rgba(0, 0, 0, 0.06) 0px 0px 40px 0px',
    },
    extend: {
      fontFamily: {
        'sans': ['"Inter"', ...defaultTheme.fontFamily.sans],
    },},
  },
  plugins: [
    typography,
    forms,
    aspectRatio,
  ],
}
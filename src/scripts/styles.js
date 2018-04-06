import _ from 'lodash'

export const breakpoints = {
  'sm': '576px',
  'md': '768px',
  'lg': '992px',
  'xl': '1200px'
}

export const mediaBelow = (breakpoint, rules) => {
  const point = _.get(breakpoints, '.' + breakpoint, '768px')
  const query = {}
  query['(max-width: ' + point + ')'] = {...rules}
  return query
}

export const mediaAbove = (breakpoint, rules) => {
  const point = _.get(breakpoints, '.' + breakpoint, '768px')
  const query = {}
  query['(min-width: ' + point + ')'] = {...rules}
  return query
}

export const mediaQueryBelow = (breakpoint, rules) => {
  const point = _.get(breakpoints, '.' + breakpoint, '768px')
  const query = {}
  query['@media (max-width: ' + point + ')'] = {...rules}
  return query
}

export const mediaQueryAbove = (breakpoint, rules) => {
  const point = _.get(breakpoints, '.' + breakpoint, '768px')
  const query = {}
  query['@media (min-width: ' + point + ')'] = {...rules}
  return query
}

export const fonts = {
  raleway: { fontFamily: 'Raleway, sans-serif' },
  lora: { fontFamily: 'Lora, serif' }
}

export const colors = {
  white: '#fff',
  tomato: '#f15b5a',
  darkslategray: '#3a3c41'
}

export const branding = {
  primary: colors.tomato,
  secondary: colors.darkslategray
}

export const base = {
  color: colors.white
}

export const typography = {
  body: { ...fonts.lora, fontSize: '21px' },
  p: { fontSize: '1rem' },
  lead: { fontSize: '1.4rem', lineHeight: '2rem' },
  h1: { ...fonts.raleway,
    textTransform: 'uppercase',
    fontWeight: '900',
    fontSize: '2.8rem',
    ...mediaQueryBelow('md', {
      fontSize: '2.2rem'
    })
  },
  h2: { ...fonts.raleway,
    textTransform: 'uppercase',
    fontWeight: '900',
    fontSize: '2.4rem',
    ...mediaQueryBelow('md', {
      fontSize: '2.2rem'
    })
  },
  h3: { ...fonts.lora, fontWeight: '900', fontSize: '1.3rem' },
  h4: { ...fonts.lora },
  h5: { ...fonts.lora }
}

export const backgrounds = {
  white: {
    color: '#000', background: colors.white
  },
  tomato: {
    color: '#FFF', background: colors.tomato
  },
  darkslategray: {
    color: '#FFF', background: colors.darkslategray
  }
}

export const underline = {
  short: {
    marginTop: '.8rem',
    display: 'block',
    width: '4rem',
    background: colors.tomato,
    height: '.4rem'
  },
  full: {
    marginTop: '.8rem',
    display: 'block',
    width: '100%',
    background: colors.tomato,
    height: '.4rem'
  }
}

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
  body: { fontSize: '16px' },
  h1: { textTransform: 'uppercase', fontWeight: 'bold', fontSize: '3.8rem' },
  h2: { textTransform: 'uppercase', fontWeight: 'bold', fontSize: '2.4rem' },
  h3: { textTransform: 'uppercase', fontWeight: 'bold', fontSize: '1.6rem' },
  h4: { }
}

export const backgrounds = {
  white: {
    color: '#000', background: colors.white
  },
  tomato: {
    color: '#FFF', background: colors.tomato
  }
}

export const underline = {
  short: {
    marginTop: '.8rem',
    display: 'block',
    width: '4rem',
    background: colors.tomato,
    height: '.4rem'
  }
}

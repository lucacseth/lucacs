import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  body: {
    margin: 0,
    fontFamily: 'Georgia, serif',
    backgroundColor: { default: '#ffffff', '@media (prefers-color-scheme: dark)': '#111111' },
    color: { default: '#000000', '@media (prefers-color-scheme: dark)': '#ffffff' },
    minHeight: '100svh',
    display: 'grid',
    placeItems: 'center',
  },
  main: { textAlign: 'center', padding: '2rem 1rem', minWidth: 0 },
  heading: {
    fontSize: { default: '2rem', '@media (max-width: 640px)': '1.75rem' },
    lineHeight: 1.25,
    fontWeight: 400,
    margin: '0 0 0.75rem',
    overflowWrap: 'break-word',
  },
  description: {
    fontSize: { default: '1.125rem', '@media (max-width: 640px)': '1rem' },
    lineHeight: 1.5,
    margin: '0 0 0.25rem',
    color: { default: '#333333', '@media (prefers-color-scheme: dark)': '#cfcfcf' },
  },
  careers: {
    color: { default: 'inherit', ':hover': { default: '#b52b1c', '@media (prefers-color-scheme: dark)': '#ff6b5b' } },
    textDecoration: 'none',
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderBottomColor: { default: '#F34533', ':hover': 'transparent' },
    outlineOffset: 4,
  },
  socials: { display: 'flex', gap: 4, justifyContent: 'center', alignItems: 'center' },
  social: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44,
    color: { default: 'inherit', ':hover': '#F34533' },
    outlineOffset: 2,
    borderRadius: 4,
  },
  icon: { display: 'block' },
});

export default Object.fromEntries(
  Object.entries(styles).map(([name, style]) => [name, stylex.props(style).className]),
);

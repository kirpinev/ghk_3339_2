import { style } from '@vanilla-extract/css';

const container = style({
  display: 'flx',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 1rem',
  textAlign: 'center',
});

const heart = style({
  marginTop: '2rem',
});

export const thxSt = {
  container,
  heart,
};

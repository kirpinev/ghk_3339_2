import { style } from "@vanilla-extract/css";

const bottomBtn = style({
  position: "fixed",
  zIndex: 2,
  width: "100%",
  padding: "12px",
  bottom: 0,
});

const container = style({
  display: "flex",
  padding: "1rem",
  flexDirection: "column",
  gap: "1rem",
});

const box = style({
  display: "flex",
  padding: "1rem",
  flexDirection: "column",
  gap: "1rem",
  borderRadius: "24px",
  border: "2px solid #F3F4F5",
});

export const appSt = {
  bottomBtn,
  container,
  box,
};

const size = {
  mobile: "825px",
  desktop: "826px",
  retro: "1600px",
};

export const Device = {
  mobile: `(max-width: ${size.mobile})`,
  desktop: `(min-width: ${size.desktop} and max-width: ${size.retro})`,
  retro: `(min-width: ${size.retro})`,
};

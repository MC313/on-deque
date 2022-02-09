const colors = {
  black: "#1d1d1d",
  almostBlack: "#323232",
  darkPurple: "rgba(106, 61, 120, 1)",
  lightGrey: "rgba(231, 231, 231, 1)", // #f5f5f5
  grey: "rgba(61, 61, 61, 0.8)",
  lightPurple: "rgba(214, 169, 228, 1)", // #d6a9e4
  purple: "rgba(103, 58, 183, 1)",
  purplishGrey: "rgb(238,238,242, 1)",
  red: "rgb(220,20,60)",
  white: "rgba(255, 255, 255, 1)",
};

const primaryTheme = {
  primary: colors.darkPurple,
  secondary: colors.lightPurple,
  tertiary: colors.purple,
  error: colors.red,
  background: colors.purplishGrey,
  cardBackground: colors.white,
  inputBackground: colors.lightGrey,
  toggleBackground: colors.darkPurple,
  primaryText: colors.darkPurple,
  secondaryText: colors.white,
  grey: colors.grey,
  white: colors.white,
};

const darkTheme = {
  ...primaryTheme,
  primary: colors.lightPurple,
  secondary: colors.darkPurple,
  tertiary: colors.purple,
  background: colors.darkPurple,
  cardBackground: colors.lightPurple,
  toggleBackground: colors.lightPurple,
  primaryText: colors.white,
  secondaryText: colors.darkPurple,
};

const exportedColors = {
  ...colors,
  ...primaryTheme,
};

export { exportedColors as colors, primaryTheme, darkTheme };

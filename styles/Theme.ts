export interface Theme {
  bgColor: string;
  fontColor: string;
  cardColor: string;
  type: string;
}
interface ThemeGroup {
  light: Theme;
  dark: Theme;
  [index: string]: Theme;
}

export const light: Theme = {
  bgColor: "#ffffff",
  fontColor: "#2f2f2f",
  cardColor: "#D3E3FC",
  type: "light",
};

export const dark: Theme = {
  bgColor: "#1d1d1d",
  fontColor: "#f0f3f5",
  cardColor: "#262626",
  type: "dark",
};

const theme: ThemeGroup = {
  light,
  dark,
};

export default theme;

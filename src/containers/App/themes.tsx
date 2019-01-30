export const SetupTheme = (theme?: string) => {
  document
    .querySelector('html')
    .setAttribute('data-theme', theme ? theme : 'dark');
};

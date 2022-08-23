/* eslint-disable import/prefer-default-export */
const colors = {
  primary: {
    50: '#ff4377',
    100: '#fb396d',
    200: '#f12f63',
    300: '#e72559',
    400: '#dd1b4f',
    500: '#d31145',
    600: '#c9073b',
    700: '#bf0031',
    800: '#b50027',
    900: '#ab001d',
  },
  black: {
    50: '#9f9f9f',
    100: '#959595',
    200: '#8b8b8b',
    300: '#818181',
    400: '#777777',
    500: '#6d6d6d',
    600: '#636363',
    700: '#595959',
    800: '#4f4f4f',
    900: '#454545',
  },
};

const CONST = {
  BASE_URL_API: `${process.env.REACT_APP_BASE_URL}/v1`,
  MISSING_REQUIRED_FIELD: 'MISSING_REQUIRED_FIELD',
};

export { colors, CONST };

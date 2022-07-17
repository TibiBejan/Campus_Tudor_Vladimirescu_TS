// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      main: string,
      secondary: string,
    },
    colors: {
        white: string,
        black: string,

        darkGrayBold: string,
        darkGrayMedium: string,
        darkGrayLight: string,

        mediumGrayBold: string,
        mediumGrayMedium: string, 
        mediumGrayLight: string,

        lightGrayBold: string,
        lightGrayMedium: string,

        primaryYellow: string,

        errorColor: string,
        warningColor: string,
        successColor: string,
    },
    padding: {
        xlarge: string,
        large: string,
        medium: string,
        small: string
    },
    margin: {
        xlarge: string,
        large: string,
        medium: string,
        small: string
    },
    breakpoints: {
        large: string,
        medium: string,
        small: string,
        mobile: string,
        mobileSmall: string,
    },
    transitions: {
      default: string,
      cubicBezier: string,
    }
  }
}
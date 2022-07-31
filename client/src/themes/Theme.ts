const Theme = {
    fonts: {
        main: 'Roboto',
        secondary: 'Playfair Display',
    },
    colors: {
        white: '#fff',
        black: '#111',

        darkGrayBold: '#1a1a1a',
        darkGrayMedium: '#272727',
        darkGrayLight: '#464646',

        mediumGrayBold: '#323232',
        mediumGrayMedium: '#575757', 
        mediumGrayLight: '#7d7d7d',

        lightGrayBold: '#fafafa',
        lightGrayMedium: '#eaeaea',

        primaryYellow: '#d3a14c',

        errorColor: '#fc8f76',
        warningColor: '#f7cc71',
        successColor: '#10cf98',
    },
    padding: {
        xlarge: '10rem',
        large: '7.5rem',
        medium: '5rem',
        small: '2.5rem'
    },
    margin: {
        xlarge: '10rem',
        large: '7.5rem',
        medium: '5rem',
        small: '2.5rem'
    },
    breakpoints: {
        large: '1366px',
        medium: '1024px',
        small: '768px',
        mobile: '550px',
        mobileSmall: '350px',
    },
    transitions: {
        default: '0.5s ease-in-out',
        cubicBezier: '0.75s cubic-bezier(0.4, 0, 0, 1)',
    }
}

export type MyThemeProps = {
    theme: typeof Theme,
}

export default Theme;
import { createGlobalStyle } from 'styled-components';
import { MyThemeProps } from './Theme';

type Props = {
    theme: MyThemeProps
}

const GlobalStyles = createGlobalStyle<Props>`
    html,
    body,
    div,
    span,
    iframe,
    figure,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    a,
    code,
    em,
    img,
    small,
    strong,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    main,
    footer,
    header,
    nav,
    section {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        text-size-adjust: none;
    }

    footer,
    header,
    nav,
    section,
    main {
        display: block;
    }

    blockquote,
    q {
        quotes: none;
    }

    blockquote::before,
    blockquote::after,
    q::before,
    q::after {
        content: "";
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        font-weight: 300;
        scroll-behavior: smooth;
        -ms-scroll-snap-type: antialiased;
        scroll-snap-type: antialiased;
        background-color: ${(props) => props.theme.colors.darkGrayBold};
        box-sizing: border-box;

        @media screen and (max-width: ${props => props.theme.breakpoints.large}) {
            font-size: 50%;
        }
    }

    body {
        font-family: ${props => props.theme.fonts.main};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;
        overflow-y: auto;
        min-height: 100vh;
        width: 100%;
        background-color: ${props => props.theme.colors.darkGrayBold};
        color: ${props => props.theme.colors.lightGrayBold};
        line-height: 1;
    }

    ol, ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    input, 
    select,
    textarea,
    button {
        -webkit-appearance: none;
        border-radius: 0;
        outline: none;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    ::-moz-selection { /* Code for Firefox */
       color: ${props => props.theme.colors.white};
       background: ${props => props.theme.colors.primaryYellow};
    }

    ::selection {
       color: ${props => props.theme.colors.white};
       background: ${props => props.theme.colors.primaryYellow};
    }
`;

export default GlobalStyles;
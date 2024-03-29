import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
interface StyledTypographyProps {
    size?: string,
    fontWeight?: string,
    textAlign?: string,
    lineHeight?: string,
    $uppercase?: boolean,
    $verticalText?: boolean,
}

export const H1 = styled.h1<StyledTypographyProps>`
    font-family: ${props => props.theme.fonts.secondary};
    font-size: ${props => {
        switch(props.size) {
            case 'showcase':
                return '5.5rem';
            default:
                return '4rem';
        }
    }};
    font-weight: ${props => {
        switch(props.fontWeight) {
            case 'showcase':
                return 800;
            default:
                return 600;
        }
    }};
    color: ${props => {
        switch(props.color) {
            case 'light':
                return props.theme.colors.white;
            case 'dark':
                return props.theme.colors.darkGrayBold;
            default: 
                return props.theme.colors.white;
        }
    }};
    letter-spacing: 0.1rem;
    text-transform: ${props => props.$uppercase ? 'uppercase' : 'none'};
    text-align: ${props => {
        switch(props.textAlign) {
            case 'center':
                return 'center'
            case 'justify':
                return 'justify'
            case 'start':
                return 'left'
            case 'end':
                return 'right'
            default: 
                return 'left'
        }
    }};
    line-height: ${props => {
        switch(props.lineHeight) {
            case 'showcase':
                return '125%';
            default:
                return '150%';
        }
    }};

    @media screen and (max-width: ${props => props.theme.breakpoints.large}) {
        font-size: ${props => {
            switch(props.size) {
                case 'showcase':
                    return '4.5rem';
                default:
                    return '3rem';
            }
        }};
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.medium}) {
        font-size: ${props => {
            switch(props.size) {
                case 'showcase':
                    return '3.5rem';
                default:
                    return '2.5rem';
            }
        }};
    }
`;

export const H2 = styled.h2<StyledTypographyProps>`
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 3.5rem;
    font-weight: ${props => {
        switch(props.fontWeight) {
            case 'bold':
                return 600;
            case 'showcase':
                return 800;
            default:
                return 500;
        }
    }};
    color: ${props => {
        switch(props.color) {
            case 'light':
                return props.theme.colors.white;
            case 'dark':
                return props.theme.colors.darkGrayBold;
            default: 
                return props.theme.colors.white;
        }
    }};
    letter-spacing: 0.1rem;
    text-transform: ${props => props.$uppercase ? 'uppercase' : 'none'};
    text-align: ${props => {
        switch(props.textAlign) {
            case 'center':
                return 'center'
            case 'justify':
                return 'justify'
            case 'start':
                return 'left'
            case 'end':
                return 'right'
            default: 
                return 'left'
        }
    }};
    line-height: ${props => {
        switch(props.lineHeight) {
            case 'showcase':
                return '125%';
            default:
                return '150%';
        }
    }};

    @media screen and (max-width: ${props => props.theme.breakpoints.large}) {
        font-size: 3rem;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.medium}) {
        font-size: 2.5rem;
    }
`;

export const H3 = styled(motion.h3)<StyledTypographyProps>`
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 2.5rem;
    font-weight: ${props => {
        switch(props.fontWeight) {
            case 'bold':
                return 600;
            case 'showcase':
                return 800;
            default:
                return 500;
        }
    }};
    color: ${props => {
        switch(props.color) {
            case 'light':
                return props.theme.colors.white;
            case 'dark':
                return props.theme.colors.darkGrayBold;
            default: 
                return props.theme.colors.white;
        }
    }};
    letter-spacing: 0.1rem;
    text-transform: ${props => props.$uppercase ? 'uppercase' : 'none'};
    text-align: ${props => {
        switch(props.textAlign) {
            case 'center':
                return 'center'
            case 'justify':
                return 'justify'
            case 'start':
                return 'left'
            case 'end':
                return 'right'
            default: 
                return 'left'
        }
    }};
    line-height: ${props => {
        switch(props.lineHeight) {
            case 'showcase':
                return '125%';
            default:
                return '150%';
        }
    }};

    @media screen and (max-width: ${props => props.theme.breakpoints.large}) {
        font-size: 2.5rem;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.medium}) {
        font-size: 2rem;
    }
`;

export const Subtitle = styled.h4<StyledTypographyProps>`
    font-size: 2rem;
    font-weight: ${props => {
        switch(props.fontWeight) {
            case 'bold':
                return 600;
            case 'showcase':
                return 800;
            default:
                return 500;
        }
    }};
    color: ${props => {
        switch(props.color) {
            case 'light':
                return props.theme.colors.white;
            case 'dark':
                return props.theme.colors.darkGrayBold;
            case 'gray':
                return props.theme.colors.mediumGrayLight;
            default: 
                return props.theme.colors.white;
        }
    }};
    letter-spacing: 0.1rem;
    text-transform: ${props => props.$uppercase ? 'uppercase' : 'none'};
    text-align: ${props => {
        switch(props.textAlign) {
            case 'center':
                return 'center'
            case 'justify':
                return 'justify'
            case 'start':
                return 'left'
            case 'end':
                return 'right'
            default: 
                return 'left'
        }
    }};
    line-height: ${props => {
        switch(props.lineHeight) {
            case 'showcase':
                return '150%';
            default:
                return '125%';
        }
    }};

    @media screen and (max-width: ${props => props.theme.breakpoints.large}) {
        font-size: 1.5rem;
    }
`;

export const Text = styled(motion.p)<StyledTypographyProps>`
    font-size: ${props => {
        switch(props.size) {
            case 'xLarge':
                return '3rem'
            case 'large':
                return '2rem';
            case 'medium':
                return '1.6rem';
            case 'small':
                return '1.4rem';
            default:
                return '1.6rem'
        }
    }};
    font-weight: ${props => {
        switch(props.fontWeight) {
            case 'light':
                return 300;
            case 'bold':
                return 500;
            case 'black': 
                return 800;
            default: 
                return 400;
        }
    }};
    color: ${props => {
        switch(props.color) {
            case 'light':
                return props.theme.colors.white;
            case 'dark':
                return props.theme.colors.darkGrayBold;
            case 'gray':
                return props.theme.colors.mediumGrayLight;
            default: 
                return props.theme.colors.white;
        }
    }};
    text-align: ${props => {
        switch(props.textAlign) {
            case 'center':
                return 'center'
            case 'justify':
                return 'justify'
            case 'start':
                return 'left'
            case 'end':
                return 'right'
            default: 
                return 'left'
        }
    }};
    text-transform: ${props => props.$uppercase ? 'uppercase' : 'none'};
    ${props => props.$verticalText && css`
        line-height: 150%;
        writing-mode: sideways-rl;
        text-orientation: mixed;
    `}
   
    @media screen and (max-width: ${props => props.theme.breakpoints.large}) {
        font-size: ${props => {
            switch(props.size) {
                case 'xLarge':
                    return '2.5rem'
                case 'large':
                    return '1.6rem';
                case 'medium':
                    return '1.2rem';
                case 'small':
                    return '1rem';
                default:
                    return '1.2rem'
            }
        }};
    }
`;

export const LinkText = styled(motion.p)<StyledTypographyProps>`
    font-size: ${props => {
        switch(props.size) {
            case 'xlarge':
                return '2.8rem';
            case 'large':
                return '2.4rem';
            case 'medium':
                return '2rem';
            case 'small':
                return '1.4rem';
            default:
                return '1.6rem';
        }
    }};
    font-weight: 400;
    color: ${props => {
        switch(props.color) {
            case 'light':
                return props.theme.colors.white;
            case 'dark':
                return props.theme.colors.darkGrayBold;
            case 'gray':
                return props.theme.colors.mediumGrayLight;
            default: 
                return props.theme.colors.white;
        }
    }};
    text-align: center;
    text-transform: ${props => props.$uppercase ? 'uppercase' : 'none'};
   
    @media screen and (max-width: ${props => props.theme.breakpoints.large}) {
        font-size: ${props => {
            switch(props.size) {
                case 'xlarge':
                    return '2.2rem';
                case 'large':
                    return '1.8rem'
                case 'medium':
                        return '1.6rem'
                case 'small':
                    return '1.2rem';
                default:
                    return '1.4rem'
            }
        }};
    }
`;

export const InputText = styled.input<StyledTypographyProps>`
    font-size: 1.4rem;
    font-weight: 400;
    color: ${props => {
        switch(props.color) {
            case 'light':
                return props.theme.colors.white;
            case 'dark':
                return props.theme.colors.darkGrayBold;
            default: 
                return props.theme.colors.white;
        }
    }};
    line-height: 150%;
    text-align: center;
    text-transform: ${props => props.$uppercase ? 'uppercase' : 'none'};
   
    @media screen and (max-width: ${props => props.theme.breakpoints.large}) {
        font-size: 1.2rem;
    }
`;
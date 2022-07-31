import styled, { css } from 'styled-components';
import { StyledButtonProps } from './Index.types';
import { Text } from '../Typography/Index';

export const StyledButton = styled.button<StyledButtonProps>`
    position: relative;
    width: auto;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    padding: 1rem 0;
    transition: ${props => props.theme.transitions.cubicBezier};
    overflow: hidden;

    ${Text} {
        transition: ${props => props.theme.transitions.cubicBezier}; 
    }

    & svg {
        fill: ${props => {
            switch(props.variant) {
                case "primary-light":
                    return props.theme.colors.white;
                case "underline-ligth":
                    return props.theme.colors.white;
                case "primary-dark":
                    return props.theme.colors.darkGrayMedium;
                case "underline-dark":
                    return props.theme.colors.darkGrayMedium;
                default:
                    return props.theme.colors.white;
            }
        }};
    }
    
    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 0.15rem;
        background-color: ${props => props.theme.colors.darkGrayLight};
        transition: ${props => props.theme.transitions.cubicBezier};
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 0.15rem;
        background-color: ${props => {
            switch(props.variant) {
                case "primary-light":
                    return props.theme.colors.white;
                case "underline-ligth":
                    return props.theme.colors.white;
                case "primary-dark":
                    return props.theme.colors.darkGrayMedium;
                case "underline-dark":
                    return props.theme.colors.darkGrayMedium;
                default:
                    return props.theme.colors.white;
            }
        }};
        transform: scaleX(0);
        transform-origin: center;
        transition: ${props => props.theme.transitions.cubicBezier};
    }
    
    &:disabled {
        opacity: 0.75;
        pointer-events: none;
        user-select: none;
    }

    &:hover {
        ${Text} {
            padding-right: 2.5rem;
        }

        ::after {
            transform: scalex(1);
        }
    }
`;
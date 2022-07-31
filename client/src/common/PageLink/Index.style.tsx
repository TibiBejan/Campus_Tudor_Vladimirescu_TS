import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledLinkProps } from './Index.types';

export const StyledLink = styled(Link)<StyledLinkProps>`
    position: relative;
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0.5rem;
    ${props => props.$verticaltext && css`
        height: auto;
        padding-left: 0.5rem;
        transform: rotate(180deg);
        writing-mode: vertical-rl;
        text-orientation: mixed;
    `};

    &::before {
        content: '';
        position: absolute;
        ${props => props.$verticaltext 
            ? css`
                top: 0;
                bottom: 0;
                left: 0;
                height: 100%;
                width: 0.2rem;
                transform: scaleY(0);
                transform-origin: top;
            ` 
            : css`        
                bottom: 0;
                right: 0;
                height: 0.2rem;
                width: 100%;
                transform: scaleX(0);
                transform-origin: left;
            `
        }
        background-color: ${props => {
            switch(props.variant) {
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
        transition: ${props => props.theme.transitions.cubicBezier};
    }

    &:hover::before {
        ${props => props.$verticaltext 
            ? css`
                transform: scaleY(1);
            ` 
            : css`        
                transform: scaleX(1);
            `
        }
    }
`;
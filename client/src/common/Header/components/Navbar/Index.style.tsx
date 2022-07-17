import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { StyledStickyProps } from './Index.types';

export const StyledNavbar = styled.nav<StyledStickyProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.sticky ? props.theme.colors.darkGrayBold : 'transparent'};
    border-bottom: 0.2rem solid ${props => props.theme.colors.darkGrayLight};
    z-index: 999;
    transition: ${props => props.theme.transitions.default};

    @media screen and (max-width: ${props => props.theme.breakpoints.large}) {
        height: 9rem;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.medium}) {
        height: 8rem;
    }
`;

export const StyledLogo = styled.div<StyledStickyProps>`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.white};
    transition: ${props => props.theme.transitions.default};
    ${props => props.sticky ? css`
        width: 10rem !important;

        @media screen and (max-width: ${props => props.theme.breakpoints.large}) {
            width: 9rem !important;
        }

        @media screen and (max-width: ${props => props.theme.breakpoints.medium}) {
            width: 8rem !important;
        }
    `
    : css`
        width: 25rem;
    `}

    @media screen and (max-width: ${props => props.theme.breakpoints.large}) {
        width: 20rem;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.medium}) {
        width: 17.5rem;
    }
`;

export const StyledLogoLink = styled(Link)`
    width: 70%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledActions = styled.div`

`;
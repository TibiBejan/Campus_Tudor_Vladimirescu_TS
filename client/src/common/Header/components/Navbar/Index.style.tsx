import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { LinkText } from "../../../Typography/Index";
import { StyledStickyProps, StyledMenuActionProps, StyledMenuTogglerProps } from './Index.types';

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
    border-bottom: 0.1rem solid ${props => props.theme.colors.darkGrayLight};
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
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-end;
`;

export const MenuToggler = styled.button`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    padding: 0 ${props => props.theme.padding.xlarge};
    cursor: pointer;
    overflow: hidden;
`;

export const NavbarAction = styled.div<StyledMenuActionProps>`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 0.1rem solid ${props => props.theme.colors.darkGrayLight};
    padding: 0;
    background-color: transparent;
    transition: ${props => props.theme.transitions.cubicBezier};

    ${LinkText} {
        transition: ${props => props.theme.transitions.cubicBezier};
    }
    
    @media screen and (min-width: ${props => props.theme.breakpoints.mobile}) {
        &:hover {
            background-color: ${props => props.$backgroundColor || props.theme.colors.darkGrayLight};
            padding: 0 5%;

            ${MenuToggler} {
                ${LinkText} {
                    filter: invert(100%);
                }
            }
        }
    }
`;

const StyledBaseMenuToggler = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ${props => props.theme.transitions.cubicBezier};
`;

export const MenuTogglerOpen = styled(StyledBaseMenuToggler)<StyledMenuTogglerProps>`
    transform: ${props => props.inactive ? 'translateY(-100%)' : 'translateY(0)'};
`;

export const MenuTogglerClose = styled(StyledBaseMenuToggler)<StyledMenuTogglerProps>`
    transform: ${props => props.active ? 'translateY(0)' : 'translateY(100%)'};
`;

export const ActionLink = styled(Link)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${props => props.theme.padding.medium};
    cursor: pointer;
    overflow: hidden;
`;

export const LanguageFlagButton = styled.button`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${props => props.theme.padding.medium};
    cursor: pointer;
    overflow: hidden;

    & > div {
        width: max-content !important;
        height: 1.5rem !important;
    }
`;
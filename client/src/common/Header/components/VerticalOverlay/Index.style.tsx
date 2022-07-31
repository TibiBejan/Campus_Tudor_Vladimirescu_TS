import styled, { css } from "styled-components";
import { Link } from 'react-router-dom';
import { LinkText } from "../../../Typography/Index";
import { StyledFadeInProps, StyledFadeOutProps, StyledVerticalTextProps } from './Index.types';

export const StyledOverlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    width: 10rem;
    display: grid;
    grid-template-rows: 1fr minmax(min-content, max-content);
    padding-top: 12rem;
    border-right: 0.1rem solid ${props => props.theme.colors.darkGrayLight};
    background-color: ${props => props.theme.colors.darkGrayBold};
    z-index: 999;

    @media screen and (max-width: ${props => props.theme.breakpoints.large}) {
        width: 9rem;
        padding-top: 9rem;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.medium}) {
        width: 8rem;
        padding-top: 8rem;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.small}) {
        display: none;
    }
`;

export const StyledOverlayContent = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`;

const StyledList = styled.ul`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-end;
    padding: ${props => props.theme.padding.small} 0;
    transform: translateX(0);
    transition: ${props => props.theme.transitions.default}
`;

export const OverlayActions = styled(StyledList)<StyledFadeOutProps>`
    ${props => props.fadeout && css`
        transform: translateX(-100%);
    `}
`;

export const OverlaySocialLinks = styled(StyledList)<StyledFadeInProps>`
    transform: translateX(100%);

    ${props => props.fadein && css`
        transform: translateX(0);   
    `}
`;

export const ListItemWrapper = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:not(:first-child) {
        margin-top: ${props => props.theme.padding.medium};
        margin-bottom: ${props => props.theme.padding.small};
    }
`;

export const StyledOverlayAction = styled.div`
    position: relative;
    width: 100%;
    height: 10rem;
    background-color: transparent;
    border-top: 0.1rem solid ${props => props.theme.colors.darkGrayLight};
    transition: ${props => props.theme.transitions.default};

    @media screen and (max-width: ${props => props.theme.breakpoints.large}) {
        height: 9rem;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.small}) {
        height: 8rem;
    }

    &:hover {
        background-color: ${props => props.theme.colors.darkGrayLight};
    }
`;

export const StyledExternalLink = styled.a<StyledVerticalTextProps>`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${props => props.$verticaltext && css`
        width: 100%;
        height: auto;
        transform: rotate(180deg);
        writing-mode: vertical-rl;
        text-orientation: mixed;
    `} 

    ${LinkText} {
        position: relative;
        user-select: none;
        cursor: inherit;
        padding-left: 0.5rem;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            height: 100%;
            width: 0.2rem;
            background-color: ${props => props.theme.colors.lightGrayBold};
            transform: scaleY(0);
            transform-origin: top;
            transition: ${props => props.theme.transitions.default};
        }
    
        &:hover::before {
            transform: scaleY(1);
        }
    }
`;

export const StyledLink = styled(Link)`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 35%;
        height: 35%;   
        fill: ${props => props.theme.colors.lightGrayBold};
    }
`;
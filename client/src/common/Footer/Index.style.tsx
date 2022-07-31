import styled from "styled-components";

export const StyledFooter = styled.footer`
    width: 100%;
    padding-left: 10rem;
    background-color: ${props => props.theme.colors.darkGrayMedium};

    @media screen and (max-width: ${props => props.theme.breakpoints.large}) {
        padding-left: 9rem;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.medium}) {
        padding-left: 8rem;
    }
`;

export const StyledFooterInner = styled.div`
    position: relative;
    min-height: 50rem;
    display: grid;
    grid-template-columns: 40% 60%;

    @media screen and (max-width: ${props => props.theme.breakpoints.large}) {
        grid-template-columns: 35% 65%;
    }
    
    @media screen and (max-width: ${props => props.theme.breakpoints.medium}) {
        display: flex;
        flex-flow: column;
    }
`;

export const FooterPrimaryLinks = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    border-right: 0.1rem solid ${props => props.theme.colors.darkGrayLight};
    padding: 10rem;

    @media screen and (max-width: ${props => props.theme.breakpoints.large}) {
        padding: 9rem;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.medium}) {
        padding: 8rem;
        border-right: none;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
        padding: 8rem 4rem;
    }
`;

export const FooterLinksList = styled.ul`
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    gap: 1.5rem;

    @media screen and (max-width: ${props => props.theme.breakpoints.medium}) {
        flex-flow: row;
        align-items: center;    
        justify-content: flex-start;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
        width: 100%;
        align-items: center;    
        justify-content: space-between;
    }
`;

export const FooterLinksItem = styled.li`
    width: 100%;
    display: flex;
`;

export const FooterContact = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
`;

export const FooterCopyright = styled.div`
    position: relative;
    width: 100%;
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 0.1rem solid ${props => props.theme.colors.darkGrayLight};
    padding: 5rem 10rem;

    @media screen and (max-width: ${props => props.theme.breakpoints.large}) {
        padding: 4.5rem 9rem;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.medium}) {
        padding: 4rem 8rem;
    }
`;
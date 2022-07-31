import styled from "styled-components";

export const StyledSlideBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: brightness(60%);
`;

export const StyledSlideContent = styled.div`
    width: 100%;
    min-height: 10rem;
    padding: 0 ${props => props.theme.padding.small};
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    background-color: ${props => props.theme.colors.white};
    transition: ${props => props.theme.transitions.default};
    z-index: 100;
`;

export const StyledSlide = styled.a`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: ${props => props.theme.padding.small};
    overflow: hidden;

    &:hover {
        ${StyledSlideContent} {
            background-color: ${props => props.theme.colors.lightGrayMedium};
        }
    }
`;


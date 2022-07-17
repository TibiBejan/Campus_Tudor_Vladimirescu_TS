import styled from "styled-components";

export const StyledImage = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: ${props => props.theme.colors.darkGrayMedium};
    transition: ${props => props.theme.transitions.cubicBezier};
    overflow: hidden;

    & > span {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: ${props => props.theme.transitions.cubicBezier};

        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;

export const StyledError = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;
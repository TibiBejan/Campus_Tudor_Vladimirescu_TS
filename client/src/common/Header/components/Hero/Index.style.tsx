import styled from "styled-components";
import { StyledHeroProps } from './Index.types';
import { H1 } from "../../../Typography/Index";
import { Button } from "../../../Button/Index";

export const StyledHero = styled.div<StyledHeroProps>`
    position: relative;
    width: 100vw;
    height: ${props => props.type === 'showcase' ? '100vh' : '50vh'};
    display: flex;
    padding: 15% 15% 10% 15%;
`;

export const HeroBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    filter: brightness(60%);
`;

export const HeroContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    z-index: 100;

    ${H1} {
        max-width: 45%;
    }

    & > button {
        width: max-content;
    }
`;
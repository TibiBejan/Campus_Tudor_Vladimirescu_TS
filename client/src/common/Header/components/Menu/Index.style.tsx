import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledMenu = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    padding-top: 10rem;
    padding-left: 10rem;
    background-color: ${props => props.theme.colors.darkGrayMedium};
    transform: translateY(-100%);
    will-change: transform;
    z-index: 500;
    overflow: hidden;

    @media screen and (max-width: ${props => props.theme.breakpoints.large}) {
        padding-top: 9rem;
        padding-left: 9rem;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.medium}) {
        padding-top: 8rem;
        padding-left: 8rem;
    }
`;

export const MenuActions = styled(motion.div)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

export const MenuActionContent = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 3.5rem;
    padding: ${props => props.theme.padding.large};
    padding-bottom: 0;
    transform: translateY(100%);
    will-change: transform;
`;

export const ActionsList = styled(motion.ul)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1.5rem;
    opacity: 0;
`;

export const ActionsListItem = styled.li`
    width: 100%;
    display: flex;
`;

export const AnimatedBorder = styled(motion.div)`
    position: absolute;
    top: 0;
    right: 0;
    height: 0;
    width: 0.1rem;
    background-color: ${props => props.theme.colors.darkGrayLight};
    will-change: height;
    z-index: 500;
`;

export const MenuUniversities = styled(motion.div)`
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: ${props => props.theme.colors.white};
    transform: translateY(100%);
    will-change: transform;
    overflow: hidden;
`;

export const UniversitiesNavigation = styled(motion.div)`
    grid-column: 1 / 2;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    padding: ${props => props.theme.padding.large};
    background-color: ${props => props.theme.colors.white};
    border-right: 0.1rem solid ${props => props.theme.colors.lightGrayMedium};
    transform: translateY(100%);
    will-change: transform;
`;

export const SliderNavigation = styled.div`
    width: 100%;
    height: 10rem;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    padding: ${props => props.theme.padding.medium} 0;
`;

export const UniversitiesSlider = styled(motion.div)`
    position: relative;
    grid-column: 2 / -1;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(100%);
    will-change: transform;

    & .universities_menu_slider {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        & .swiper_wrapper {
            height: 100%;
            display: flex;
            flex-flow: row;
        }

        & .swiper-slide:not(:last-child) {
            border-right: 0.1rem solid ${props => props.theme.colors.lightGrayMedium};
        }

        & .swiper-scrollbar-drag {
            background-color: ${props => props.theme.colors.lightGrayMedium};
        }
    }
`;
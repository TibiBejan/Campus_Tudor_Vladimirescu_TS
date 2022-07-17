import { ReactNode } from "react";

export interface DefaultProps {
    children?: ReactNode,
    menuState: {
        clicked: boolean,
        buttonDisabled: boolean,
        buttonLabel: string,
    },
    handleMenuState():void,
    isScrolledFlag: boolean,
}

export interface StyledStickyProps {
    sticky: boolean
}
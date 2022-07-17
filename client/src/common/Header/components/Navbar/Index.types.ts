import { ReactNode } from "react";

export interface DefaultProps {
    children?: ReactNode,
    menuState: {
        clicked: boolean,
        buttonDisabled: boolean,
    },
    handleMenuState():void,
    isScrolledFlag: boolean,
}

export interface StyledStickyProps {
    sticky: boolean
}

export interface StyledMenuActionProps {
    $backgroundColor?: string,    
}

export interface StyledMenuTogglerProps {
    active?: boolean,
    inactive?: boolean,
}
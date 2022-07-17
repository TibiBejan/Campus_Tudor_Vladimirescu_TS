import { ReactNode } from "react";

export interface DefaultProps {
    children?: ReactNode;
}

export interface MenuState {
    clicked: boolean,
    buttonDisabled: boolean
}


import React, { useState } from 'react';
import { DefaultProps, MenuState } from './Index.types';
import useWindowSize from './hooks/useWindowScroll/Index';
import { VerticalOverlay } from './components/VerticalOverlay/Index';
import { Navbar } from './components/Navbar/Index';
import { StyledHeader } from './Index.style';

const Header:React.FC<DefaultProps> = () => {
    // State
    const [ menuToggled, setMenuToggled ] = useState<MenuState>({
        clicked: false,
        buttonDisabled: false
    });
    // Hooks
    const isScrolled = useWindowSize();
    // Functions
    const handleToggleMenu = () => {
        if (!menuToggled.clicked) {
            setMenuToggled((prevState) => ({
                ...prevState,
                clicked: !prevState.clicked,
                buttonDisabled: !prevState.buttonDisabled,
            }));
            // Enable menu button after 1000ms timeout - finish menu animation
            setTimeout(() => {
                setMenuToggled((prevState) => ({
                    ...prevState,
                    buttonDisabled: !prevState.buttonDisabled,
                }));
            }, 1000);
        } else {
            setMenuToggled((prevState) => ({
                ...prevState,
                clicked: !prevState.clicked,
                buttonDisabled: !prevState.buttonDisabled,
            }));
            // Enable menu button after 1000ms timeout - finish menu animation
            setTimeout(() => {
                setMenuToggled((prevState) => ({
                    ...prevState,
                    buttonDisabled: !prevState.buttonDisabled,
                }));
            }, 1000);
        }
    }

    return (
        <StyledHeader>
            <VerticalOverlay toggled={menuToggled.clicked}/>
            <Navbar menuState={menuToggled} handleMenuState={handleToggleMenu} isScrolledFlag={isScrolled}/>
        </StyledHeader>
    )
}

export { Header };
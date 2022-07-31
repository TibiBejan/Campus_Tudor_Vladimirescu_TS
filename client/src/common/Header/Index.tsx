import React, { useState } from 'react';
// Types and Interfaces
import { DefaultProps, MenuState } from './Index.types';
// Hooks
import useWindowSize from './hooks/useWindowScroll/Index';
// Modules
import { VerticalOverlay } from './components/VerticalOverlay/Index';
import { Navbar } from './components/Navbar/Index';
import { Menu } from './components/Menu/Index';
import { Hero } from './components/Hero/Index';
// Styles
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
            document.body.classList.add('no-overflow');
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
            document.body.classList.remove('no-overflow');
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
            <Menu visible={menuToggled.clicked}/>
            <Hero 
                type="showcase" 
                imagePath="images/campus_hero/homepage_showcase.jpg" 
                imageAlt="Campus Tudor Vladimirescu" 
                title="This island in the middle of Iasi has its own ecosystem" 
                linkLabel="Discover our story"
                linkPath="/about-us"
            />
        </StyledHeader>
    )
}

export { Header };
import React from 'react';
import { AnimatePresence } from 'framer-motion';
// Types and Interfaces
import { DefaultProps } from './Index.types';
// Modules
import { Image } from '../../../Image/Index';
import { H3, LinkText } from '../../../Typography/Index';
// Styles
import { StyledNavbar, StyledLogo, StyledLogoLink, StyledActions, NavbarAction, MenuToggler, MenuTogglerOpen, MenuTogglerClose, ActionLink, LanguageFlagButton } from './Index.style';

const Navbar:React.FC<DefaultProps> = ({ menuState, handleMenuState, isScrolledFlag }) => {
  return (
    <StyledNavbar sticky={isScrolledFlag}>
      <StyledLogo sticky={isScrolledFlag}>
        <StyledLogoLink to='/'>
          {
            isScrolledFlag 
            ? (
              <AnimatePresence>
                <Image 
                  fileName="brand/tuiasi-university-brand-1.png" 
                  alt="Gheorghe Asachi Technical University of Iaşi Branding"
                />
              </AnimatePresence>
            )
            : (
              <AnimatePresence>
                <H3 
                  key="navbar-logo-heading"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    transition: {
                      delay: 0.35,
                      duration: 0.5,
                    }
                  }}
                  exit={{ 
                    opacity: 0,
                    transition: {
                      duration: 0
                    }
                  }}
                  color="dark" 
                  fontWeight='bold' 
                  $uppercase={true}
                >
                  Tudor
                </H3>
              </AnimatePresence>
            )
          }
        </StyledLogoLink>
      </StyledLogo>
      <StyledActions>
        <NavbarAction $backgroundColor='#fff'>
          <MenuToggler 
            disabled={menuState.buttonDisabled} 
            onClick={() => handleMenuState()}
          >
            <MenuTogglerOpen inactive={menuState.clicked}>
              <LinkText>Menu</LinkText>
            </MenuTogglerOpen>
            <MenuTogglerClose active={menuState.clicked}>
              <LinkText>Close Menu</LinkText>
            </MenuTogglerClose>
          </MenuToggler>
        </NavbarAction>
        <NavbarAction>
          <ActionLink to="/login">
            <LinkText>Login</LinkText>
          </ActionLink>
        </NavbarAction>
        <NavbarAction>
          <ActionLink to="register">
            <LinkText>Register</LinkText>
          </ActionLink>
        </NavbarAction>
        <NavbarAction>
          <LanguageFlagButton>
            <Image fileName='svg/romania-flag.svg' alt='Romanian language flag' />
          </LanguageFlagButton>
        </NavbarAction>
      </StyledActions>
    </StyledNavbar>
  )
}

export { Navbar };
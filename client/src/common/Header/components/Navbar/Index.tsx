import React from 'react';
// Types and Interfaces
import { DefaultProps } from './Index.types';
// Modules
import { Image } from '../../../Image/Index';
import { H3, LinkText } from '../../../Typography/Index';
// Styles
import { StyledNavbar, StyledLogo, StyledLogoLink, StyledActions, NavbarAction, MenuToggler, MenuTogglerOpen, MenuTogglerClose, ActionLink, LanguageFlagButton } from './Index.style';

const Navbar:React.FC<DefaultProps> = ({ menuState, handleMenuState, isScrolledFlag }) => {
  
  console.log(menuState);

  return (
    <StyledNavbar sticky={isScrolledFlag}>
      <StyledLogo sticky={isScrolledFlag}>
        <StyledLogoLink to='/'>
          {
            isScrolledFlag 
            ? (
              // add delay on image showing - gsap?
              <Image 
                fileName="brand/tuiasi-university-brand-1.png" 
                alt="Gheorghe Asachi Technical University of Iaşi Branding"
              />
            )
            : (
              // add delay on title showing - gsap?
              <H3 color="dark" fontWeight='bold' uppercase>Tudor</H3>
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
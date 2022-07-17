import React from 'react';
// Types and Interfaces
import { DefaultProps } from './Index.types';
// Modules
import { Image } from '../../../Image/Index';
import { H3 } from '../../../Typography/Index';
// Styles
import { StyledNavbar, StyledLogo, StyledLogoLink, StyledActions } from './Index.style';

const Navbar:React.FC<DefaultProps> = ({ menuState, handleMenuState, isScrolledFlag }) => {
  
  console.log(isScrolledFlag);

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
              <H3 color="dark">Tudor</H3>
            )
          }
        </StyledLogoLink>
      </StyledLogo>
      <StyledActions>
        {/* <MenuToggler>
          <MenuTogglerButton
            disabled={false}
            onClick={() => console.log('error')}
          >

          </MenuTogglerButton>
        </MenuToggler> */}
      </StyledActions>
    </StyledNavbar>
  )
}

export { Navbar };
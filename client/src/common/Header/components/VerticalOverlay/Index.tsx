import React from 'react';
// Types and Interfaces
import { DefaultProps } from './Index.types';
// Modules
import { PageLink } from '../../../PageLink/Index';
import { LinkText } from '../../../Typography/Index';
// Styles
import { StyledOverlay, StyledOverlayContent, OverlayActions, StyledLink, StyledExternalLink, OverlaySocialLinks, ListItemWrapper, StyledOverlayAction } from './Index.style';

const VerticalOverlay:React.FC<DefaultProps> = ({ toggled }) => {
  return (
    <StyledOverlay>
        <StyledOverlayContent>
            <OverlayActions fadeout={toggled}>
                <ListItemWrapper>
                    <PageLink
                        linkPath="/news"
                        linkLabel="Campus News"
                        variant="light" 
                        fontSize="medium"
                        verticalText={true} 
                    />
                </ListItemWrapper>
                <ListItemWrapper>
                    <PageLink
                        linkPath="/about-us"
                        linkLabel="About Us"
                        variant="light" 
                        fontSize="medium"
                        verticalText={true} 
                    />
                </ListItemWrapper>
            </OverlayActions>
            <OverlaySocialLinks fadein={toggled}>
                <ListItemWrapper>
                    <StyledExternalLink href="https://www.tuiasi.ro/" target="_blank" rel="noreferrer" $verticaltext={true}>
                        <LinkText size="medium">Tuiasi</LinkText>
                    </StyledExternalLink>
                </ListItemWrapper>
                <ListItemWrapper>
                    <StyledExternalLink href="https://www.facebook.com/TUIasiRO" target="_blank" rel="noreferrer" $verticaltext={true}>
                        <LinkText size="medium">Facebook</LinkText>
                    </StyledExternalLink>
                </ListItemWrapper>
                <ListItemWrapper>
                    <StyledExternalLink href="https://www.instagram.com/campustudorvladimirescu/" target="_blank" rel="noreferrer" $verticaltext={true}>
                        <LinkText size="medium">Instagram</LinkText>
                    </StyledExternalLink>
                </ListItemWrapper>
                <ListItemWrapper>
                    <StyledExternalLink href="https://www.linkedin.com/school/universitatea-tehnic%C4%83-%E2%80%9Egh.-asachi%E2%80%9D-din-ia%C8%99i/" target="_blank" rel="noreferrer" $verticaltext={true}>
                        <LinkText size="medium">LinkedIn</LinkText>
                    </StyledExternalLink>
                </ListItemWrapper>
            </OverlaySocialLinks>
        </StyledOverlayContent>
        <StyledOverlayAction>
            <StyledLink to="/contact-us">
                <svg viewBox="0 0 480 480">
                    <g>
                        <path d="M437,374.1h-52.9v-59h73.1c4.7,0,7.7-3.1,7.7-7.8v-6.6c0-116.5-90.8-215.4-206.8-225.2l-9.6-0.8V29.8H259 c5.5,0,8.9-3.3,8.9-8.5c0-4.8-3.6-8.5-8.1-8.5h-38c-4.8,0-8.9,3.9-8.9,8.5c0,4.3,4,8.5,8.1,8.5h10.5v44.7l-9.7,0.7 c-117.2,8.8-209,107.9-209,225.4v6.6c0,4.3,4.2,7.8,9.3,7.8h69.2v59H44.6c-24.1,0-43.8,18.9-43.8,42.2V458c0,4.7,4.6,9.3,9.3,9.3 h461.3c4.3,0,7.7-4.2,7.7-9.3v-41.6C479.2,392.7,460.6,374.1,437,374.1z M30.3,298.1l0.7-11.2c3.3-52.4,26.5-101.6,65.3-138.4 c39.1-37.1,90.1-57.6,143.4-57.6s104.2,20.5,143.4,57.6c38.8,36.8,62,85.9,65.3,138.4l0.7,11.2H30.3z M367,315.1v59H108.2v-59H367z M462.2,450.2L462.2,450.2H17.9v-33.9c0-13.9,12-25.2,26.7-25.2H437c14.3,0,25.2,10.8,25.2,25.2V450.2z"></path>
                    </g>
                </svg>
            </StyledLink>
        </StyledOverlayAction>
    </StyledOverlay>
  )
}

export { VerticalOverlay }
import React from 'react';
import { DefaultProps } from './Index.types';
import { StyledLink } from './Index.style';
import { LinkText } from '../Typography/Index';

const PageLink:React.FC<DefaultProps> = ({ children, linkPath, linkLabel, variant, fontSize, fontWeight, uppercase, verticalText }) => {
  return (
    <StyledLink
      to={linkPath}
      variant={variant}
      $verticaltext={verticalText}
    >
      {
        linkLabel && (
          <LinkText
            color={variant}
            size={fontSize}
            fontWeight={fontWeight}
            $uppercase={uppercase}
          >
            { linkLabel }
          </LinkText>
        )
      }
      { children }
    </StyledLink>
  )
}

export { PageLink };
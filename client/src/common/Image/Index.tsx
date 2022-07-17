import React from 'react';
// Types and Interfaces
import { DefaultProps } from './Index.types';
// Modules
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Skeleton from 'react-loading-skeleton';
import { IconContext } from 'react-icons';
import { BiMessageSquareError } from "react-icons/bi";
import { LinkText } from '../Typography/Index';
// Hooks
import { useImage } from '../../setup/hooks/useImage/Index';
// Styles
import 'react-loading-skeleton/dist/skeleton.css'
import { StyledImage, StyledError } from './Index.style';

const Image:React.FC<DefaultProps> = ({ fileName, alt, ...rest }) => {
  // Hooks
  const {loading, error, image } = useImage(fileName);

  return (
    <StyledImage>      
      {
        loading && (
          <Skeleton 
            style={{ height: '100%', width: '100%' }}
            baseColor="#fafafa"
            highlightColor="#eaeaea"
          />
        )
      }
      {
        (!loading && error) && (
          <StyledError>
            <LinkText color="dark">Error</LinkText>
            <IconContext.Provider value={{size: "15px", color: "#fc8f76"}}>
              <BiMessageSquareError />
            </IconContext.Provider>
          </StyledError>
        )
      }
      {
        (!loading && !error && image) && (
          <LazyLoadImage 
            src={image} 
            alt={alt}
            effect="opacity"
            width={"100%"}
            height={"100%"}
            {...rest}
          />
        )
      }
    </StyledImage>
  )
}

export { Image }
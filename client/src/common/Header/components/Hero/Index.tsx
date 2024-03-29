import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../Button';
import { Image } from '../../../Image/Index';
import { H1 } from '../../../Typography/Index';
import { HeroBackground, HeroContent, StyledHero } from './Index.style';
import { DefaultProps } from './Index.types';

const Hero:React.FC<DefaultProps> = ({ type, imagePath, imageAlt, title, linkLabel, linkPath }) => {
    // React Router
    let navigate = useNavigate();
    // Functions
    const redirectOnClick = ():void => {
        if(linkPath) {
            navigate(linkPath);
        }
    }

    return (
        <StyledHero type={type}>
            <HeroBackground>
                <Image 
                    fileName={imagePath}
                    alt={imageAlt}
                />
            </HeroBackground>
            <HeroContent>
                <H1 color="light" size="showcase">{ title }</H1>
                {
                    linkLabel && (
                        <Button 
                            type="button"
                            name="hero_button"
                            onClick={redirectOnClick}
                            variant="underline-light"
                            label={linkLabel}
                            fontSize="large"
                            fontColor="light"
                        />
                    )
                }
            </HeroContent>
        </StyledHero>
    )
}

export { Hero };


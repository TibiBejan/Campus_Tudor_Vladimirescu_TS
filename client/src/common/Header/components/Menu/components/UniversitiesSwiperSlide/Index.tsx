import React from 'react';
import { DefaultProps } from './Index.types';
import { Text } from '../../../../../Typography/Index';
import { Image } from '../../../../../Image/Index';
import { StyledSlide, StyledSlideBackground, StyledSlideContent } from './Index.style';

const UniversitiesSwiperSlider:React.FC<DefaultProps> = ({ universityLink, title, subtitle, tag }) => {
  return (
    <StyledSlide href={universityLink} target="_blank" rel="noreferrer"> 
      <StyledSlideBackground>
        <Image 
          fileName={`images/universities/${tag}_showcase.jpg`}
          alt={title}
        />
      </StyledSlideBackground>
      <StyledSlideContent>
        <Text color="dark">{title}</Text>
        <Text color="gray" size="small">{subtitle}</Text>
      </StyledSlideContent>
    </StyledSlide>
  )
}

export { UniversitiesSwiperSlider }
import React, { forwardRef } from 'react';
import { DefaultProps, Ref } from './Index.types';
import { IconContext } from 'react-icons';
import { BsArrowRight } from "react-icons/bs";
import { Text } from '../Typography/Index';
import { StyledButton } from './Index.style';

const Button = forwardRef<Ref, DefaultProps>(({ onClick, disabled, type, name, label,  variant, fontSize, fontWeight, fontColor, uppercase }, ref) => (
    <StyledButton
        type={type}
        disabled={disabled}
        onClick={onClick}
        name={name}
        variant={variant}
        ref={ref}
    >
        <Text 
            size={fontSize}
            fontWeight={fontWeight}
            color={fontColor}
            $uppercase={uppercase}
        >
            {label}
        </Text>
        <IconContext.Provider value={{ size:"20px" }}>
            <BsArrowRight />
        </IconContext.Provider>
    </StyledButton>
));

export { Button };
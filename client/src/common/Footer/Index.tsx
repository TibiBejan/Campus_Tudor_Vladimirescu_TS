import React from 'react';
import { DefaultProps } from './Index.types';
import { StyledFooter, StyledFooterInner, FooterPrimaryLinks, FooterLinksList, FooterLinksItem, FooterContact, FooterCopyright } from './Index.style';
import { Text } from '../Typography/Index';
import { PageLink } from '../PageLink/Index';

const Footer:React.FC<DefaultProps> = () => {
  return (
    <StyledFooter>
        <StyledFooterInner>
            <FooterPrimaryLinks>
                <FooterLinksList>
                    <FooterLinksItem>
                        <PageLink linkPath="/student-services" linkLabel="Services" variant="light" fontSize="xlarge" />
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <PageLink linkPath="/login" linkLabel="Student" variant="light" fontSize="xlarge" />
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <PageLink linkPath="/contact-us" linkLabel="Contact Us" variant="light" fontSize="xlarge" />
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <PageLink linkPath="/questions" linkLabel="FAQ" variant="light" fontSize="xlarge" />
                    </FooterLinksItem>
                </FooterLinksList>
            </FooterPrimaryLinks>
            <FooterContact>

            </FooterContact>
            <FooterCopyright>
                <Text size="large" color="light">All rights reserved 2021 &copy; Bejan Tiberiu-Constantin</Text>
            </FooterCopyright>
        </StyledFooterInner>
    </StyledFooter>
  )
}

export  { Footer };
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper';
// Types and Interfaces
import { DefaultProps } from './Index.types';
// Modules
import MenuStaticData from './Index.data.json';
import { PageLink } from '../../../PageLink/Index';
import { Text } from '../../../Typography/Index';
import { Button } from '../../../Button/Index';
import { UniversitiesSwiperSlider } from './components/UniversitiesSwiperSlide/Index';
// Animation
import { menuAnimation, menuActionsAnimation, menuActionsContentAnimation, menuActionsContentChildrenAnimation, menuActionsBorderAnimation, menuUniversitiesAnimation, menuUniversitiesChildrenAnimation } from './Index.animation';
// Styles
import { StyledMenu, MenuActions, MenuActionContent, ActionsList, ActionsListItem, AnimatedBorder, MenuUniversities, UniversitiesNavigation, SliderNavigation, UniversitiesSlider } from './Index.style';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const Menu:React.FC<DefaultProps> = ({ visible }) => {
  // Refs
  const prevButton = useRef<HTMLButtonElement>(null);
  const nextButton = useRef<HTMLButtonElement>(null);

  return (
    <StyledMenu
      initial={false}
      variants={menuAnimation}
      animate={visible ? "opened"  : "closed"}
    >
      {
        MenuStaticData?.menuNavigation.map((navigationEntry) => (
          <MenuActions
            key={navigationEntry.id}
            initial={false}
            variants={menuActionsAnimation}
          >
            <MenuActionContent
              initial={false}
              variants={menuActionsContentAnimation}
            >
              <Text 
                color="gray" 
                $uppercase
                initial={false}
                variants={menuActionsContentChildrenAnimation}
              >
                { navigationEntry.navigationGroupTitle }
              </Text>
              <ActionsList
                initial={false}
                variants={menuActionsContentChildrenAnimation}
              >
                {
                  navigationEntry.navigationLinks.map((navigationLink) => (
                    <ActionsListItem key={ navigationLink.id }>
                      <PageLink 
                        linkPath={ navigationLink.path } 
                        linkLabel={navigationLink.title} 
                        variant="light" 
                        fontSize="large" 
                      />
                    </ActionsListItem>
                  ))
                }
              </ActionsList>
            </MenuActionContent>
            <AnimatedBorder 
              initial={false}
              variants={menuActionsBorderAnimation}
            />
          </MenuActions>
        ))
      }
      <MenuUniversities
        initial={false}
        variants={menuUniversitiesAnimation}
      >
        <UniversitiesNavigation
          initial={false}
          variants={menuUniversitiesChildrenAnimation}
        >
          <PageLink 
            linkPath="/universities" 
            linkLabel="The universities" 
            variant="dark" 
            fontSize="xlarge" 
          />
          <SliderNavigation>
            <Button
              type="button"
              label="Prev"
              name="menu-universities-slider-next-button"
              variant="primary-dark"
              fontSize="large"
              fontColor="dark"
              ref={prevButton}
            />
            <Button
              type="button"
              label="Next"
              name="menu-universities-slider-next-button"
              variant="primary-dark"
              fontSize="large"
              fontColor="dark"
              ref={nextButton}
            />
          </SliderNavigation>
        </UniversitiesNavigation>
        <UniversitiesSlider
          initial={false}
          variants={menuUniversitiesChildrenAnimation}
        >
          <Swiper
            modules={[Scrollbar, Navigation]}
            scrollbar={{
              hide: true,
            }}
            navigation={{
              prevEl: prevButton.current,
              nextEl: nextButton.current,
            }}
            slidesPerView={2}
            breakpoints={{
              // when window width is >= 1921
              1921: {
                slidesPerView: 4,
              },
            }}
            onSlideChange={() => console.log('slide change')}
            className="universities_menu_slider"
          >
            {
              MenuStaticData?.menuUniversities.map((university) => (
                <SwiperSlide key={university.id}>
                  <UniversitiesSwiperSlider 
                    universityLink={university.externalLink}
                    title={university.title}
                    subtitle={university.subtitle}
                    tag={university.id}
                  />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </UniversitiesSlider>
      </MenuUniversities>
    </StyledMenu>
  )
}

export { Menu };
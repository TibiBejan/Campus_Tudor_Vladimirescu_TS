import React from 'react';
import { defaultProps } from './Index.types';
import { Header } from '../../common/Header/Index';

const AboutPage:React.FC<defaultProps> = () => {
  return (
    <React.Fragment>
      <Header />
      <h1>About</h1>
    </React.Fragment>
  )
}

export { AboutPage };
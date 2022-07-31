import React from 'react';
import { defaultProps } from './Index.types';
import { Header } from '../../common/Header/Index';
import { Footer } from '../../common/Footer/Index';

const HomePage:React.FC<defaultProps> = () => {
  return (
    <React.Fragment>
      <Header />
      <h1>Index</h1>
      <Footer />
    </React.Fragment>
  )
}

export { HomePage };
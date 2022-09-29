import React from 'react';

import { useAppContext } from '../context/TareaState';

import FormTarea from './FormTarea';

import './Panel.css';
import TareaList from './TareaList';

const Panel = () => {

  return (
    <main className='appTareas'>
      <div>
        <FormTarea />
        <TareaList />        
      </div>
    </main>
  );
};

export default Panel;

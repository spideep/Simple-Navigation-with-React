import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { addDecorator } from '@storybook/react';

addDecorator(storyFn => <BrowserRouter>{storyFn()}</BrowserRouter>);

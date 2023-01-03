import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Basic from './Basic';
import Modal from './Modal';
import Filter from './Filter';

storiesOf('Basic Calendar', module)
  .add('Basic calendar', () => (<Basic/>))
// storiesOf('Modal', module)
// 	.add('Basic Modal', () => (<Modal/>))
storiesOf('Filter', module)
	.add('Basic Filter', () => (<Filter/>));
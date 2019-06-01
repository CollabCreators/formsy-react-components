import {createContext} from 'react';

import {ClassValue} from 'classnames/types';

export interface Props {
  layout: 'horizontal' | 'vertical' | 'elementOnly';
  validateBeforeSubmit: boolean;
  validatePristine: boolean;
  elementWrapperClassName: ClassValue;
  labelClassName: ClassValue;
  rowClassName: ClassValue;
  [key: string]: any;
}

const defaultContextValue: Props = {
  layout: 'horizontal',
  validateBeforeSubmit: true,
  validatePristine: false,
  elementWrapperClassName: '',
  labelClassName: '',
  rowClassName: '',
};

const FrcContext = createContext(defaultContextValue);

export default FrcContext;

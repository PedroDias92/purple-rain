import React, { ReactElement } from 'react';
import { basicColors } from '../styles/themes';

export interface ColorsProps {}

export function Colors({}: ColorsProps): ReactElement {
  console.log(basicColors);
  return <div>hello</div>;
}

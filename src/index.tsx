import React from 'react';
import styled from 'styled-components';
export * from './Button';
export * from './Button2';
export * from './HelloWorld';

export interface Props {}

/**
 * A custom Thing component. Neat!
 */
export const Thing: React.FC = ({ children }) => {
  return <div>{children || `the snozzberries taste like snozzberries`}</div>;
};

export const SimpleStyledH1 = styled.h1`
  color: blue;
  border: 1px solid red;
`;
export const SimpleStyledH1Application = (): JSX.Element => {
  return <SimpleStyledH1>Hi Pedro</SimpleStyledH1>;
};

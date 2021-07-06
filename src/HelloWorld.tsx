import React, { ReactElement } from 'react';
// import styled from 'styled-components';

export interface Props {
  name: string;
}

/* const H1 = styled.h1`
  color: red;
`; */

export function HelloWorld({ name }: Props): ReactElement {
  return (
    <div>
      {/* <H1>PEDRO</H1> */}
      {'>'} Hello {name}
    </div>
  );
}

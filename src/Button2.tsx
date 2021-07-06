import React, { ReactElement } from 'react';

export interface Props {
  label: string;
}

export function Button2({ label }: Props): ReactElement {
  return (
    <button>
      {'>'} Hello {label}
    </button>
  );
}

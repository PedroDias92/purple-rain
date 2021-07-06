import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '../src/Button';

export default {
  title: 'buttons/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const ButtonDefault = Template.bind({});
ButtonDefault.args = {
  label: 'LABEL',
  variant: 'primary',
  size: 'medium',
  disabled: false,
  onClick: () => console.log('Just a test'),
};

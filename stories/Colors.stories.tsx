import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Colors, ColorsProps } from '../src/components/Colors';

export default {
  title: 'buttons/Button',
  component: Colors,
} as Meta;

const Template: Story<ColorsProps> = (args) => <Colors {...args} />;

export const ColorsDefault = Template.bind({});
ColorsDefault.args = {};

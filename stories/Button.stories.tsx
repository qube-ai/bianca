import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SimpleButton, ButtonProps } from '../src';

const meta: Meta = {
  title: 'Button',
  component: SimpleButton,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => <SimpleButton {...args} />;

export const SCButton = Template.bind({});

SCButton.args = { text: 'Button' };
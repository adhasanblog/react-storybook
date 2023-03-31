import React from 'react';

import Button from '../components/UI/Button';
import { RightArrow } from '../components/UI/Icons/Directions';
import {
  EyeHideIcon,
  EyeIcon,
  PlusIcon,
  SearchIcon,
} from '../components/UI/Icons/UserInterface';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    variant: { control: 'select' },
    icon: {},
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Button',
  size: 'normal',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Button',
  size: 'normal',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  label: 'Button',
};

export const Normal = Template.bind({});
Normal.args = {
  variant: 'primary',
  label: 'Button',
  size: 'normal',
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'primary',
  label: 'Button',
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'primary',
  label: 'Button',
  size: 'small',
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  variant: 'primary',
  label: 'Button',
  size: 'normal',
  icon: <RightArrow />,
  iconPosition: 'left',
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  variant: 'primary',
  label: 'Button',
  size: 'normal',
  icon: <PlusIcon />,
  iconPosition: 'right',
};

export const OnlyIconNormal = Template.bind({});
OnlyIconNormal.args = {
  variant: 'primary',
  icon: <SearchIcon />,
  size: 'normal',
};

export const OnlyIconMedium = Template.bind({});
OnlyIconMedium.args = {
  variant: 'primary',
  icon: <SearchIcon />,
  size: 'medium',
};

export const OnlyIconSmall = Template.bind({});
OnlyIconSmall.args = {
  variant: 'primary',
  icon: <SearchIcon />,
  size: 'small',
};

export const OnlyIconNoPadding = Template.bind({});
OnlyIconNoPadding.args = {
  variant: 'transparent',
  icon: <EyeIcon />,
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };

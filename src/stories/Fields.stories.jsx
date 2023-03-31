import React from 'react';
import { EyeIcon } from '../components/UI/Icons/UserInterface';
import InputField from '../components/UI/InputField';

export default {
  title: 'Fields',
  component: InputField,
  argTypes: {
    fieldType: { control: 'select' },
  },
};

const Template = (args) => <InputField {...args} />;

export const FieldText = Template.bind({});
FieldText.args = {
  fieldType: 'text',
  label: 'Title',
  placeholder: 'Text',
};

export const FieldPassword = Template.bind({});
FieldPassword.args = {
  fieldType: 'password',
  label: 'Password',
  placeholder: 'Text',
  button: true,
  icon: <EyeIcon />,
};

export const FieldLoading = Template.bind({});
FieldLoading.args = {
  fieldType: 'password',
  label: 'Password',
  placeholder: 'Text',
  button: true,
  icon: <EyeIcon />,
  isLoading: true,
};

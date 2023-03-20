
import type { Meta, StoryObj } from '@storybook/react';

import { Widget } from './Widget';

const meta: Meta<typeof Widget> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  component: Widget,
};

export default meta;
type Story = StoryObj<typeof Widget>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
    args: {
        variant: "primary",
    },
  render: (props) => <Widget {...props} />,
};


// It is important to put the type assertion on, otherwise you can make type Errors 
export const Secondary : Story = {...Primary, args: {
    ...Primary.args, 
    variant: "secondary"
}}
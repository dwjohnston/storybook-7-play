
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },

};

export default meta;
type Story = StoryObj<typeof Button>;



// No args, automatically sets controls
export const Default: Story = {

}


// With click handler
// https://storybook.js.org/docs/7.0/react/essentials/actions
export const WithClickHandler: Story = {
    args: {
        label: "click me", 
    }
}

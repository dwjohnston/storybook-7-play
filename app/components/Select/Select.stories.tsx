
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Select, SelectProps } from './Select';

const meta: Meta<typeof Select> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    component: Select,
};

export default meta;


const values = [{
    id: "1",
    label: "foo",
},
{
    id: "2",
    label: "bar",
},
{ id: "3", label: "biz" }];

type Story = StoryObj<typeof Select<typeof values[number]>>;





export const WayIUsuallyDoIt = () => {

    const [value, setValue] = useState(null as null | string);

    return <>

        <p>
            I often also include a debug panel up here, to show the currently selected value: {value}
        </p>
        <Select availableOptions={values}
            selectedValue={value}
            onChange={setValue}
            labelGenFn={(v) => v.label}
            valueGenFn={(v) => v.id}
            label="My Select" />
    </>


}


export const NewWayAttempt1: Story = {
    args: {
        availableOptions: values,
        labelGenFn: (v) => v.label,
        valueGenFn: (v) => v.id,
        label: "My Label",


        // Omit onChange, selectedValue, those are handled in render fn. 
    },


    render: (args) => {
        const [value, setValue] = useState(null as null | string);

        return <>

            <p>
                I often also include a debug panel up here, to show the currently selected value: {value}
            </p>
            <Select
                {...args}
                selectedValue={value}
                onChange={setValue}
            />


        </>
    }

}

function StoryRender(props: Omit<SelectProps<typeof values[number]>, "onChange" | "selectedValue">) {
    const [value, setValue] = useState(null as null | string);

    return <>

        <p>
            I often also include a debug panel up here, to show the currently selected value: {value}
        </p>
        <Select
            {...props}
            selectedValue={value}
            onChange={setValue}
        />


    </>
}

export const NewWayAttempt2: Story = {
    args: {
        availableOptions: values,
        labelGenFn: (v) => v.label,
        valueGenFn: (v) => v.id,
        label: "My Label",


        // Omit onChange, selectedValue, those are handled in render fn. 
    },


    render: (args) => {
        return <StoryRender {...args} />
    }

}
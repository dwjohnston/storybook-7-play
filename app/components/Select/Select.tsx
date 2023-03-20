import React from 'react';

export type SelectProps<T> = {

    availableOptions: Array<T>;
    selectedValue: string | null;
    valueGenFn: (value: T) => string;
    labelGenFn: (value: T) => string;
    label: string;
    onChange: (value: string | null) => void; 

};



export const
    Select = <T,>(props: SelectProps<T>) => {
        const { availableOptions,
            selectedValue,
            valueGenFn, labelGenFn, label, onChange } = props;


        return (
            <div>

                <label>{label}
                    <select value={selectedValue || ''} onChange={(e) => {
                        const newValue = e.target.value; 
                        if(newValue ===''){
                            onChange(null); 
                        }
                        else {
                            onChange(e.target.value)

                        }
                    }}>
                        <option value =''>(None)</option>
                        {availableOptions.map((v) => {
                            return <option key={valueGenFn(v)} value={valueGenFn(v)}>{labelGenFn(v)}</option>
                        })}
                    </select>
                </label>
            </div>
        );
    };

import React, { useState } from 'react';

export type WidgetProps = { 

    variant?: "primary" | "secondary" | "error"

    
};


const colorMap : Record<Required<WidgetProps['variant']> & string, string>= {
    primary: "blue", 
    secondary: "green", 
    error: "red"
}
function getStyles(variant: WidgetProps['variant'] = "primary")  : React.CSSProperties{



    return {
        "border": `solid 1px ${colorMap[variant]}`
    }
}

export const Widget = (props: WidgetProps) => {

    const {variant} = props; 


    const [value, setValue] = useState(0);
    const styles = getStyles(variant); 

  return (
    <div style={styles}>
      <dl>
        <dd>Value</dd>
        <dt>{value}</dt>
      </dl>

      <button onClick ={() => setValue(value + 1)}>Click Me</button>
    </div>
  );
};

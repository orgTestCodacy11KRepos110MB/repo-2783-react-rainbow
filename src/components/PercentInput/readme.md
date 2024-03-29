##### percent input base

```js
import React, { useState } from 'react';
import { PercentInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};
const SetValueInput = () => {
    const [ value, setValue ] = useState();

    return (
        <PercentInput
            label="Input Label"
            placeholder="Enter your percent"
            style={containerStyles}
            className="rainbow-m-vertical_x-large rainbow-m_auto"
            value={value}
            onChange={setValue}
        />
    )
}

    <SetValueInput />
```

##### percent input with different border radius

```js
import React, { useState } from 'react';
import { PercentInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};
const SetValueInput = () => {
    const [ value1, setValue1 ] = useState();
    const [ value2, setValue2 ] = useState();
    const [ value3, setValue3 ] = useState();
    const [ value4, setValue4 ] = useState();

    return (
        <>
            <PercentInput
                label="Percent Input with border radius square"
                placeholder="Enter your percent"
                style={containerStyles}
                className="rainbow-m-vertical_x-large rainbow-m_auto"
                value={value1}
                onChange={setValue1}
                borderRadius="square"
            />
            <PercentInput
                label="Percent Input with border radius semi-square"
                placeholder="Enter your percent"
                style={containerStyles}
                className="rainbow-m-vertical_x-large rainbow-m_auto"
                value={value2}
                onChange={setValue2}
                borderRadius="semi-square"
            />
            <PercentInput
                label="Percent Input with border radius semi-rounded"
                placeholder="Enter your percent"
                style={containerStyles}
                className="rainbow-m-vertical_x-large rainbow-m_auto"
                value={value3}
                onChange={setValue3}
                borderRadius="semi-rounded"
            />
            <PercentInput
                label="Percent Input with border radius rounded"
                placeholder="Enter your percent"
                style={containerStyles}
                className="rainbow-m-vertical_x-large rainbow-m_auto"
                value={value4}
                onChange={setValue4}
                borderRadius="rounded"
            />
        </>
    )
}

    <SetValueInput />
```

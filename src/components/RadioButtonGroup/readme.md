##### RadioButtonGroup base

```js
import React from 'react';
import { RadioButtonGroup } from 'react-rainbow-components';

const options = [
    { value: 'off', label: 'Off' },
    { value: 'parking', label: 'Parking' },
    { value: 'auto', label: 'Auto' },
    { value: 'on', label: 'On' },
];

class SimpleRadioButtonGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'auto',
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        return this.setState({ value: event.target.value });
    }

    render() {
        const { value } = this.state;
        return (
            <RadioButtonGroup
                id="radio-button-group-component-1"
                options={options}
                value={value}
                onChange={this.handleOnChange}
            />
        );
    }
}

    <div className="rainbow-p-around_x-large rainbow-align-content_center">
        <SimpleRadioButtonGroup />
    </div>
```

##### RadioButtonGroup small

```js
import React from 'react';
import { RadioButtonGroup } from 'react-rainbow-components';

const options = [
    { value: 'off', label: 'Off' },
    { value: 'parking', label: 'Parking' },
    { value: 'auto', label: 'Auto' },
    { value: 'on', label: 'On' },
];

class SimpleRadioButtonGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'auto',
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        return this.setState({ value: event.target.value });
    }

    render() {
        const { value } = this.state;
        return (
            <RadioButtonGroup
                id="radio-button-group-component-1"
                options={options}
                value={value}
                onChange={this.handleOnChange}
                size="small"
                variant="brand"
            />
        );
    }
}

    <div className="rainbow-p-around_x-large rainbow-align-content_center">
        <SimpleRadioButtonGroup />
    </div>
```

##### RadioButtonGroup brand with label

```js
import React from 'react';
import { RadioButtonGroup } from 'react-rainbow-components';

const options = [
    { value: 'off', label: 'Off' },
    { value: 'parking', label: 'Parking' },
    { value: 'auto', label: 'Auto' },
    { value: 'on', label: 'On' },
];

class LabeledBrandRadioButtonGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'auto',
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        return this.setState({ value: event.target.value });
    }

    render() {
        const { value } = this.state;
        return (
            <RadioButtonGroup
                id="radio-button-group-component-1"
                options={options}
                value={value}
                variant="brand"
                onChange={this.handleOnChange}
                label="RadioButtonGroup Label"
            />
        );
    }
}

    <div className="rainbow-p-around_x-large rainbow-align-content_center">
        <LabeledBrandRadioButtonGroup />
    </div>
```

##### RadioButtonGroup inverse

```js
import React from 'react';
import { RadioButtonGroup } from 'react-rainbow-components';

const options = [
    { value: 'off', label: 'Off' },
    { value: 'parking', label: 'Parking' },
    { value: 'auto', label: 'Auto' },
    { value: 'on', label: 'On' },
];

class RadioButtonGroupInverse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'auto',
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        return this.setState({ value: event.target.value });
    }

    render() {
        const { value } = this.state;
        return (
            <RadioButtonGroup
                id="radio-button-group-component-1"
                options={options}
                value={value}
                variant="inverse"
                onChange={this.handleOnChange}
            />
        );
    }
}

    <InverseContainer className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        <RadioButtonGroupInverse />
    </InverseContainer>
```

##### RadioButtonGroup disabled

```js
import React from 'react';
import { RadioButtonGroup } from 'react-rainbow-components';

const options = [
    { value: 'off', label: 'Off', disabled: true },
    { value: 'parking', label: 'Parking', disabled: true },
    { value: 'auto', label: 'Auto', disabled: true },
    { value: 'on', label: 'On', disabled: true },
];

class DisabledRadioButtonGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'user',
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        return this.setState({ value: event.target.value });
    }

    render() {
        const { value } = this.state;
        return (
            <RadioButtonGroup
                options={options}
                value={value}
                onChange={this.handleOnChange}
                label="RadioButtonGroup Label"
            />
        );
    }
}

    <div className="rainbow-p-around_x-large rainbow-align-content_center">
        <DisabledRadioButtonGroup />
    </div>
```

##### RadioButtonGroup required

```js
import React from 'react';
import { RadioButtonGroup } from 'react-rainbow-components';

const options = [
    { value: 'off', label: 'Off' },
    { value: 'parking', label: 'Parking' },
    { value: 'auto', label: 'Auto' },
    { value: 'on', label: 'On' },
];

class RequiredRadioButtonGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: undefined,
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        return this.setState({ value: event.target.value });
    }

    render() {
        const { value } = this.state;
        return (
            <RadioButtonGroup
                options={options}
                value={value}
                onChange={this.handleOnChange}
                label="RadioButtonGroup Label"
                required
            />
        );
    }
}

    <div className="rainbow-p-around_x-large rainbow-align-content_center">
        <RequiredRadioButtonGroup />
    </div>
```

##### RadioButtonGroup error

```js
import React , { useState } from 'react';
import { RadioButtonGroup } from 'react-rainbow-components';

const options = [
    { value: 'off', label: 'Off' },
    { value: 'parking', label: 'Parking' },
    { value: 'auto', label: 'Auto' },
    { value: 'on', label: 'On' },
];

    const ErrorRadioButtonGroup = () => {
        const [value, setValue] = useState('anonymous');
        const handleOnChange = event => setValue(event.target.value);
        return (
            <RadioButtonGroup
                options={options}
                value={value}
                onChange={handleOnChange}
                label="RadioButtonGroup Label"
                error="This field is required"
            />
        );
    }

        <div className="rainbow-p-around_x-large rainbow-align-content_center">
            <ErrorRadioButtonGroup />
        </div>
```


##### RadioButtonGroup brand with label
```js
import React, { useState } from 'react';
import { RadioButtonGroup, Avatar } from 'react-rainbow-components';
import styled from 'styled-components';

const data = [
    {
        avatar: 'images/user/avatar-1.svg',
        name: 'Jane Doe',
        email: 'jane@gmail.com',
        linkedin: '#',
        github: '#',
        isActive: true,
    },
    {
        avatar: 'images/user/avatar-2.svg',
        name: 'John Doe',
        email: 'john@gmail.com',
        linkedin: '#',
        github: '#',
        isActive: true,
    },
    {
        avatar: 'images/user/avatar-3.svg',
        name: 'Ana Doe',
        email: 'ana@gmail.com',
        linkedin: '#',
        github: '#',
        isActive: true,
    },
    {
        avatar: 'images/user/avatar-4.svg',
        name: 'Leandro Torres',
        email: 'leandro@gmail.com',
        linkedin: '#',
        github: '#',
        isActive: false,
    },
    {
        avatar: 'images/user/avatar-5.svg',
        name: 'Jose Torres',
        email: 'jose@gmail.com',
        linkedin: '#',
        github: '#',
        isActive: false,
    },
    {
        avatar: 'images/user/avatar-6.svg',
        name: 'Reinier',
        email: 'reinier@gmail.com',
        linkedin: '#',
        github: '#',
        isActive: false,
    },
    {
        avatar: 'images/user/avatar-7.svg',
        name: 'Sara',
        email: 'sara@gmail.com',
        linkedin: '#',
        github: '#',
        isActive: false,
    },
    {
        avatar: 'images/user/avatar-8.svg',
        name: 'Tahimi',
        email: 'tahimi@gmail.com',
        linkedin: '#',
        github: '#',
        isActive: false,
    }
];

const Title = styled.h1.attrs(props => props.theme.rainbow)`
    font-family: 'Lato';
    font-size: 36px;
    text-align: center;
    color: ${props => props.palette.text.main};
`;

const StyledAvatar = styled(Avatar)`
    width: 100px;
    height: 100px;
    box-shadow: 0 2px 4px 0 rgba(6, 28, 63, 0.3);
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const NameLabel = styled.label.attrs(props => props.theme.rainbow)`
    font-family: Lato;
    font-size: 16px;
    font-weight: 900;
    text-align: center;
    color: ${props => props.palette.text.main};
    display: block;
`;

const EmailLabel = styled.span.attrs(props => props.theme.rainbow)`
    font-family: Lato;
    font-size: 12px;
    font-weight: 300;
    text-align: center;
    color: ${props => props.palette.text.label};
    display: block;
`;

const ConctactContainer = styled.div`
    width: max-content;
`;

const Contact = props => {
    const { avatar, name, email, linkedin } = props;
    return (
        <ConctactContainer className="rainbow-m-around_medium">
            <StyledAvatar
                src={ avatar }
                assistiveText={ name }
                title={ name }
            />
            <NameLabel className="rainbow-m-top_small">
                { name }
            </NameLabel>
            <EmailLabel className="rainbow-m-top_x-small">
                { email }
            </EmailLabel>
            <div className="rainbow-flex rainbow-justify_center rainbow-m-top_small">
                <a href={linkedin}>
                    <GitHubIcon />
                </a>
            </div>
        </ConctactContainer>
    );
};

const options = [
    { value: 'active', label: 'Actives' },
    { value: 'all', label: 'All' },
];

const ContactsFilteredContainer = props => {
    const { statusToShow, contacts } = props;
    return contacts.filter(contact => statusToShow === 'all' || contact.isActive).map((contact, index) => {
        const key = `contact-${index}`;
        return (
            <Contact
                key={key}
                avatar={contact.avatar}
                name={contact.name}
                email={contact.email}
                linkedin={contact.linkedin}
                github={contact.github}
            />
        );
    });
}

const Contacts = ({ data: contacts }) => {
    const [statusToShow, setStatusToShow] = useState('active');

    const handleOnChange = event => {
        setStatusToShow(event.target.value);
    }

    return (
        <div className="rainbow-flex rainbow-flex_column rainbow-align_center">
            <RadioButtonGroup
                className="rainbow-m-top_large rainbow-m-bottom_medium"
                options={options}
                value={statusToShow}
                variant="brand"
                onChange={handleOnChange}
            />
            <div className="rainbow-flex rainbow-flex_wrap rainbow-justify_space-around">
                <ContactsFilteredContainer statusToShow={statusToShow} contacts={contacts}/>
            </div>
        </div>
    );
}

    <div className="rainbow-m-around_large">
        <Title className="rainbow-m-top_large">Contributors</Title>
        <Contacts data={data} />
    </div>
```


##### RadioButtonGroup with different Border Radius

```js

    import React, { useState } from 'react';
    import { RadioButtonGroup } from 'react-rainbow-components';
    import styled from 'styled-components';

    const options = [
        { value: 'off', label: 'Off' },
        { value: 'parking', label: 'Parking' },
        { value: 'auto', label: 'Auto' },
        { value: 'on', label: 'On' },
    ];

    const Container = styled.div`
        flex-direction : column;
        gap: 20px;
    `;

    const BorderRadiusRadioButtonGroup = () => {
        const [value1, setValue1] = useState('auto');
        const [value2, setValue2] = useState('auto');
        const [value3, setValue3] = useState('auto');
        const [value4, setValue4] = useState('auto');

        const handleOnChange1 = event => {
            setValue1(event.target.value);
        }
        const handleOnChange2 = event => {
            setValue2(event.target.value);
        }
        const handleOnChange3 = event => {
            setValue3(event.target.value);
        }
        const handleOnChange4 = event => {
            setValue4(event.target.value);
        }

        return (
            <Container className="rainbow-p-around_x-large rainbow-align-content_center">
                <RadioButtonGroup
                    label="Border Radius Square"
                    options={options}
                    value={value1}
                    onChange={handleOnChange1}
                    borderRadius="square"
                />
                <RadioButtonGroup
                    label="Border Radius Semi Square"
                    options={options}
                    value={value2}
                    onChange={handleOnChange2}
                    borderRadius="semi-square"
                />
                <RadioButtonGroup
                    label="Border Radius Semi Rounded"
                    options={options}
                    value={value3}
                    onChange={handleOnChange3}
                    borderRadius="semi-rounded"
                />
                <RadioButtonGroup
                    label="Border Radius Rounded"
                    options={options}
                    value={value4}
                    onChange={handleOnChange4}
                    borderRadius="rounded"
                />
            </Container>
        );
    }

        <BorderRadiusRadioButtonGroup />

```
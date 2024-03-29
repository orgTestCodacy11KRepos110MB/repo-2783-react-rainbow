import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withReduxForm from '../../libs/hocs/withReduxForm';
import { uniqueId } from '../../libs/utils';
import RenderIf from '../RenderIf';
import Options from './options';
import StyledContainer from './styled/container';
import Label from '../Input/label';
import StyledInnerContainer from './styled/innerContainer';
import StyledSelect from './styled/select';
import ErrorText from '../Input/styled/errorText';
import HelpText from '../Input/styled/helpText';

/**
 * Select element presents a menu of options.
 * @category Form
 */
class Select extends Component {
    constructor(props) {
        super(props);
        this.selectId = uniqueId('select');
        this.selectRef = React.createRef();
    }

    /**
     * Sets focus on the element.
     * @public
     */
    focus() {
        this.selectRef.current.focus();
    }

    /**
     * Sets click on the element.
     * @public
     */
    click() {
        this.selectRef.current.click();
    }

    /**
     * Sets blur on the element.
     * @public
     */
    blur() {
        this.selectRef.current.blur();
    }

    render() {
        const {
            label,
            value,
            onChange,
            onFocus,
            onBlur,
            onClick,
            bottomHelpText,
            error,
            required,
            disabled,
            options,
            style,
            className,
            id,
            name,
            labelAlignment,
            hideLabel,
            tabIndex,
            variant,
            size,
            borderRadius,
        } = this.props;

        return (
            <StyledContainer className={className} style={style} id={id}>
                <Label
                    label={label}
                    labelAlignment={labelAlignment}
                    hideLabel={hideLabel}
                    required={required}
                    inputId={this.selectId}
                    size={size}
                />
                <StyledInnerContainer error={error} disabled={disabled}>
                    <StyledSelect
                        error={error}
                        id={this.selectId}
                        name={name}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onClick={onClick}
                        value={value}
                        tabIndex={tabIndex}
                        required={required}
                        disabled={disabled}
                        variant={variant}
                        ref={this.selectRef}
                        size={size}
                        borderRadius={borderRadius}
                    >
                        <Options options={options} />
                    </StyledSelect>
                </StyledInnerContainer>
                <RenderIf isTrue={bottomHelpText}>
                    <HelpText>{bottomHelpText}</HelpText>
                </RenderIf>
                <RenderIf isTrue={error}>
                    <ErrorText>{error}</ErrorText>
                </RenderIf>
            </StyledContainer>
        );
    }
}

Select.propTypes = {
    /** Text label for the Select. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The name of the Select. */
    name: PropTypes.string,
    /** Specifies the selected value. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** The action triggered when a option item is selected. */
    onChange: PropTypes.func,
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** Shows the help message below the Select. */
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that an input field must be filled out before submitting the form.
     * This value defaults to false. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that an input field must be filled out before submitting the form.
     * This value defaults to false. */
    required: PropTypes.bool,
    /** Specifies that an input element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** The option items to be displayed. */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
            disabled: PropTypes.bool,
        }),
    ),
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** Describes the position of the Select label. Options include left, center and right.
     * This value defaults to center. */
    labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
    /** A boolean to hide the Select label. */
    hideLabel: PropTypes.bool,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The variant changes the appearance of the Select. Accepted variants include default
     * and shaded. This value defaults to default. */
    variant: PropTypes.oneOf(['default', 'shaded']),
    /** The size of the input. Valid values are small, medium, and large. */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** The border radius of the input. Valid values are square, semi-square, semi-rounded and rounded. This value defaults to rounded. */
    borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
};

Select.defaultProps = {
    label: undefined,
    value: undefined,
    name: undefined,
    onChange: () => {},
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    bottomHelpText: null,
    error: null,
    required: false,
    disabled: false,
    options: [],
    className: undefined,
    style: undefined,
    id: undefined,
    labelAlignment: 'center',
    hideLabel: false,
    tabIndex: undefined,
    variant: 'default',
    size: 'medium',
    borderRadius: 'rounded',
};

export default withReduxForm(Select);

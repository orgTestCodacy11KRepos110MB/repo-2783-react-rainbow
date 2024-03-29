import React from 'react';
import PropTypes from 'prop-types';
import ButtonContent from './buttonContent';
import StyledSpinner from './styled/spinner';
import StyledContent from './styled/content';

const variantMap = {
    base: 'base',
    neutral: 'base',
    brand: 'inverse',
    destructive: 'inverse',
    success: 'inverse',
    inverse: 'inverse',
    'outline-brand': 'brand',
    'border-inverse': 'inverse',
    'border-filled': 'base',
};

const spinnerMap = { small: 'x-small', medium: 'small', large: 'medium' };

export default function Content({ label, children, variant, isLoading, size }) {
    if (isLoading) {
        return (
            <StyledContent>
                <ButtonContent label={label}>{children}</ButtonContent>
                <StyledSpinner
                    isVisible={isLoading}
                    variant={variantMap[variant]}
                    size={spinnerMap[size]}
                />
            </StyledContent>
        );
    }
    return <ButtonContent label={label}>{children}</ButtonContent>;
}

Content.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    children: PropTypes.node,
    variant: PropTypes.string,
    isLoading: PropTypes.bool,
    size: PropTypes.string,
};

Content.defaultProps = {
    label: undefined,
    children: null,
    variant: 'neutral',
    isLoading: false,
    size: 'medium',
};

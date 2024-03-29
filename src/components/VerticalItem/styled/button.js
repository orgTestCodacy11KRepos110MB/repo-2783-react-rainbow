import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';

const StyledAnchor = attachThemeAttrs(styled.button)`
    border: none;
    outline: 0;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem 1rem 1rem 3rem;
    border-radius: 0;
    color: ${props => props.palette.text.label};
    cursor: pointer;
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    background-color: transparent;
    text-decoration: none;
    transition: color 0.1s linear;
    box-sizing: border-box;

    :hover,
    :focus,
    :active {
        color: ${props => props.palette.text.main};
        text-decoration: none;
        outline: 0;
    }

    :focus,
    :active {
        font-weight: bold;
        background-color: ${props => props.palette.action.active};
    }

    :hover {
        background-color: ${props => props.palette.action.hover};
    }

    ${props =>
        props.isSelected &&
        `
            color: ${props.palette.text.main};
            background-color: ${props.palette.action.active};
            font-weight: bold;
        `};
`;

export default StyledAnchor;

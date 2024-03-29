import formatInteger from '../../CurrencyInput/helpers/formatInteger';
import { isValidNumberValue } from '../../CurrencyInput/helpers';

export default function normalizeValue({ value, locale, decimalSeparator, options }) {
    const stringValue = String(value);
    if (value === '-') {
        return value;
    }

    if (isValidNumberValue(value)) {
        const [integer, fraction] = stringValue.split('.');
        const formattedInteger = formatInteger({ integer: Number(integer) / 100, locale, options });

        return stringValue.indexOf('.') !== -1
            ? `${formattedInteger}${decimalSeparator}${fraction || ''}`
            : formattedInteger;
    }

    return '';
}

/**
 * VisualPickerOption page object class.
 * @class
 */
class PageVisualPickerOption {
    /**
     * Create a new VisualPickerOption page object.
     * @constructor
     * @param {string} rootElement - The selector of the VisualPickerOption root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the option content.
     * @method
     */
    async click() {
        await $(this.rootElement)
            .$('label[data-id="visual-picker_option-label"]')
            .click();
    }

    /**
     * Returns true when the input has the focus.
     * @method
     * @returns {bool}
     */
    async hasFocus() {
        return $(this.rootElement)
            .$('input')
            .isFocused();
    }

    /**
     * Returns true when the input is checked.
     * @method
     * @returns {bool}
     */
    async isChecked() {
        return $(this.rootElement)
            .$('input')
            .isSelected();
    }
}

module.exports = PageVisualPickerOption;

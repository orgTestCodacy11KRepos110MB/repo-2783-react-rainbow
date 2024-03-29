/**
 * Select page object class.
 * @class
 */
class PageSelect {
    /**
     * Create a new Select page object.
     * @constructor
     * @param {string} rootElement - The selector of the Select root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the select element.
     * @method
     */
    async click() {
        await $(this.rootElement)
            .$('select')
            .click();
    }

    /**
     * Clicks the label element.
     * @method
     */
    async clickLabel() {
        await $(this.rootElement)
            .$('label')
            .click();
    }

    /**
     * Returns true when the select element has focus.
     * @method
     * @returns {bool}
     */
    async hasFocusSelect() {
        return $(this.rootElement)
            .$('select')
            .isFocused();
    }

    /**
     * Returns true when the select item with item position is selected.
     * @method
     * @returns {bool}
     * @param {number} itemPosition - The base 0 index of the select item.
     */
    async isSelectedItem(itemPosition) {
        const items = await $(this.rootElement).$$('option');
        if (items[itemPosition]) {
            return items[itemPosition].isSelected();
        }
        return false;
    }
}

module.exports = PageSelect;

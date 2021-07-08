
export default class Section{
    constructor({renderer}, popupSelector) {
        //this._renderedItems = items;
        this._renderer = renderer;

        this._popupSelector = document.querySelector(popupSelector)
    }

    renderItems(items) {
        items.forEach(item => {
            this._renderer(item)
        });
    }


    addItem(element) {
        this._popupSelector.append(element)
    }


    prependItem(element) {
        this._popupSelector.prepend(element)
    }
}





















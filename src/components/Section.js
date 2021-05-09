

export default class Section {
    constructor({data, renderer}, selector) {
        this._initialArray = data;
        this._renderer = renderer;
        this._selector = document.querySelector(selector);
    }

    renderItems() {
        this._initialArray.forEach((item) => {
            this._renderer(item);
        });
    }

    setItems(element) {
        this._selector.append(element);
    }

    prependItems(element) {
        this._selector.prepend(element);
    }
}
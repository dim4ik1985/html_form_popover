const popoverMessages = {
  btn: {
    title: "Popover title",
    message: "And here's some amazing content. It's very engaging",
  },
};

export class Form {
  constructor(element, createPopover, removePopover) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }

    this._element = element;
    this._actualMessage = [];

    this.createPopover = createPopover;
    this._removePopover = removePopover;

    this.showPopover = this.showPopover.bind(this);

    this._element.addEventListener("submit", this.showPopover);
  }

  showPopover(e) {
    e.preventDefault();
    this._actualMessage.forEach((id) => this._removePopover(id));

    const elements = this._element.elements;

    [...elements].some((el) => {
      if (el.localName === "button" && this._actualMessage.length !== 0) {
        this._actualMessage = [];
      } else {
        this._actualMessage.push(
          this.createPopover(
            popoverMessages[el.name].title,
            popoverMessages[el.name].message,
            el
          )
        );
      }
    });
  }
}

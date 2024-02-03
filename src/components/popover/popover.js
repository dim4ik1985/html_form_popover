import "./popover.css";
export class Popover {
  constructor() {
    this._popover = [];

    this.createPopover = this.createPopover.bind(this);
    this.removePopover = this.removePopover.bind(this);
  }

  createPopover(title, message, element) {
    const tooltipElement = document.createElement("div");
    tooltipElement.classList.add("form__error");

    const tooltipTitle = document.createElement("div");
    tooltipTitle.classList.add("form__error-title");
    tooltipTitle.textContent = title;

    const tooltipMessage = document.createElement("div");
    tooltipMessage.classList.add("form__error-message");
    tooltipMessage.textContent = message;
    tooltipElement.appendChild(tooltipTitle);
    tooltipElement.appendChild(tooltipMessage);

    const id = performance.now();

    this._popover.push({
      id,
      element: tooltipElement,
    });

    document.body.appendChild(tooltipElement);

    const { left, top } = element.getBoundingClientRect();
    tooltipElement.style.width = element.offsetWidth + "px";

    tooltipElement.style.left =
      left + element.offsetWidth / 2 - tooltipElement.offsetWidth / 2 + "px";
    tooltipElement.style.top =
      top -
      element.offsetHeight / 2 -
      tooltipElement.offsetHeight / 2 -
      14 +
      "px";

    return id;
  }

  removePopover(id) {
    const tooltip = this._popover.find((t) => t.id === id);
    tooltip.element.remove();
    this._popover = this._popover.filter((t) => t.id !== id);
  }
}

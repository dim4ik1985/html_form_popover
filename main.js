/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/components/form/form.js
const popoverMessages = {
  btn: {
    title: "Popover title",
    message: "And here's some amazing content. It's very engaging"
  }
};
class Form {
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
    this._actualMessage.forEach(id => this._removePopover(id));
    const elements = this._element.elements;
    [...elements].some(el => {
      if (el.localName === "button" && this._actualMessage.length !== 0) {
        this._actualMessage = [];
      } else {
        this._actualMessage.push(this.createPopover(popoverMessages[el.name].title, popoverMessages[el.name].message, el));
      }
    });
  }
}
;// CONCATENATED MODULE: ./src/components/popover/popover.js

class Popover {
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
      element: tooltipElement
    });
    document.body.appendChild(tooltipElement);
    const {
      left,
      top
    } = element.getBoundingClientRect();
    tooltipElement.style.width = element.offsetWidth + "px";
    tooltipElement.style.left = left + element.offsetWidth / 2 - tooltipElement.offsetWidth / 2 + "px";
    tooltipElement.style.top = top - element.offsetHeight / 2 - tooltipElement.offsetHeight / 2 - 14 + "px";
    return id;
  }
  removePopover(id) {
    const tooltip = this._popover.find(t => t.id === id);
    tooltip.element.remove();
    this._popover = this._popover.filter(t => t.id !== id);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js
// TODO: write code here

// comment this to pass build



const btnPopover = new Popover(".btn-popover");
const app_button = new Form(".form", btnPopover.createPopover, btnPopover.removePopover);
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;